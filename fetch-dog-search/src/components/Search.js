import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";


const apiURL = "https://frontend-take-home-service.fetch.com";
const api = axios.create({
  withCredentials: true,
});

const Search = () => {
  const [breedList, setBreedList] = useState([]);
  const [breed, setBreed] = useState("");
  const [zip, setZip] = useState("");
  const [searchIds, setSearchIds] = useState([]);
  const [results, setResults] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [favorites, setFavorites] = useState(new Set());
  const [match, setMatch] = useState("");
 
  useEffect(() => {
    fetchBreeds();
  }, []);

  useEffect(() => {
    fetchResults();
  }, [searchIds]);


  const fetchBreeds = async (e) => {
    const response = await api.get(apiURL + "/dogs/breeds", {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.data;
    setBreedList(data);
  };

  const fetchDogs = async (e) => {
    const response = await api.get(apiURL + `/dogs/search/?breeds=${breed}`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.data;
    setNext(data.next)
    setSearchIds(data.resultIds);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchDogs()
  };

  const fetchResults = async (e) => {
    
        const response = await api.post(apiURL+'/dogs', searchIds, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        });
        setResults(response.data);
   }

  const getNextPage = async (e) => {
    const response = await api.get(apiURL + next, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.data;
    setNext(data.next);
    setPrev(data.prev);
    setSearchIds(data.resultIds);
    fetchResults();
  };

  const getPrevPage = async (e) => {
    const response = await api.get(apiURL + prev, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.data;
    setNext(data.next);
    setPrev(data.prev);
    setSearchIds(data.resultIds);
    fetchResults();
  };

function saveFavorite(id) {
  setFavorites(favorites.add(id));
  console.log(favorites);
};

const fetchMatch = async (e) => {

  const body = [...favorites];
  const response = await api.post(apiURL+'/dogs/match', body, {
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    },
  });
  const data = await response.data.match
  
  window.location.assign(`/match/${data}`);
}


  return (
    <div>
      <form onSubmit={handleSearch} className="m-3">
        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupSelect01">
            Breeds
          </label>
          <select
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option selected>Choose...</option>
            {breedList.map((breed, i) => (
              <option key={i}>{breed}</option>
            ))}
          </select>
        </div>
        <div className="input-group mb-3">
          <lable className="input-group-text" for="inputGroup02">
            Zip Code
          </lable>
          <input
            id="inputGroup02"
            className="form-control"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            type="text"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Search Dogs
        </button>
      </form>
      <div>
      <button className="btn btn-secondary m-3" type='click' onClick={(e) => fetchMatch()}>Find Match</button>
      </div>
      <div className="d-flex justify-content-around align-content-start flex-wrap">
      {results.map((dog, i)=> (
            <Card 
                key={i}
                age={dog.age} 
                breed={dog.breed} 
                id={dog.id}
                img={dog.img}
                name={dog.name}
                zip={dog.zip_code}
                save={saveFavorite}
                />
        ))}
      </div>
      <div className="text-center">
      <button className="btn btn-secondary m-3" type='click' onClick={getPrevPage}>Previous Page</button>
      <button className="btn btn-secondary m-3" type='click' onClick={getNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default Search;
