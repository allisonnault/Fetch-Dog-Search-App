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
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [searchIds, setSearchIds] = useState([]);
  const [results, setResults] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [favorites, setFavorites] = useState(new Set());
  const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

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
    })
    .then(function (response) {
      setBreedList(response.data);
    })
    .catch(function (error) {
      if (error.response.status === 401) {
        window.location.assign('/')
      }
    })
    
  };

  const fetchDogs = async (e) => {
    const response = await api.get(
      apiURL +
        `/dogs/search/?breeds=${breed}&ageMin=${minAge}&ageMax=${maxAge}`,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;
    console.log(data);
    setNext(data.next);
    setSearchIds(data.resultIds);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchDogs();
  };

  const fetchResults = async (e) => {
    const response = await api.post(apiURL + "/dogs", searchIds, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    setResults(response.data);
  };

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
  }

  const fetchMatch = async (e) => {
    const body = [...favorites];
    const response = await api.post(apiURL + "/dogs/match", body, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.data.match;

    window.location.href = `#/match/${data}`;
  };

  return (
    <div className="main">
      <form onSubmit={handleSearch} className="m-3">
        <div className="mb-3 input-group">
          <label className="input-group-text" for="inputGroupSelect01">
            Breeds
          </label>
          <select
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option selected></option>
            {breedList.map((breed, i) => (
              <option key={i}>{breed}</option>
            ))}
          </select>
        </div>
        <div className="mb-3 input-group">
          <label className="input-group-text" for="inputGroupSelect02">
            Min Age
          </label>
          <select
            id="inputGroupSelect02"
            className="form-select"
            value={minAge}
            onChange={(e) => setMinAge(e.target.value)}
          >
          <option selected>Optional
          </option>
          {options.map((option, i) => (
            <option key={i}>{option}</option>
          ))}
          </select>
        </div>
        <div className="mb-3 input-group">
          <label className="input-group-text" for="inputGroupSelect03">
            Max Age
          </label>
          <select
            id="inputGroupSelect03"
            className="form-select"
            value={maxAge}
            onChange={(e) => setMaxAge(e.target.value)}
          >
          <option selected>Optional
          </option>
          {options.map((option, i) => (
            <option key={i}>{option}</option>
          ))}
          </select>
        </div>
        <button className="btn" type="submit">
          Search Dogs
        </button>
      </form>
      <div>
        <button
          className="btn m-3 matchBtn"
          type="click"
          onClick={(e) => favorites.size > 0 ? fetchMatch() : alert('Select favorites to find a match')}
        >
          Find Match
        </button>
      </div>
      <div className="d-flex justify-content-around align-content-start flex-wrap">
        {results.map((dog, i) => (
          <Card
            key={i}
            age={dog.age}
            breed={dog.breed}
            id={dog.id}
            img={dog.img}
            name={dog.name}
            zip={dog.zip_code}
            save={saveFavorite}
            favorites={favorites}
          />
        ))}
      </div>
      {searchIds == '' ? <h4 className="text-center">Search to see results</h4> : 
      <div className="text-center">
        <button
          className="btn btn-secondary m-3"
          type="click"
          onClick={getPrevPage}
        >
          Previous Page
        </button>
        <button
          className="btn btn-secondary m-3"
          type="click"
          onClick={getNextPage}
        >
          Next Page
        </button>
      </div> }
      
    </div>
  );
};

export default Search;
