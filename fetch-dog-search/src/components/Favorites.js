import React, { useState } from 'react';

const Favorites = () => {

    const [favorites, setFavorites] = useState([]);

   

    return (
        <div>{favorites}</div>
    )
}

export default Favorites;