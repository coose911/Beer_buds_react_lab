import React from 'react'

const FavouriteBeer = ({favbeer}) => {


    const ourFavouriteBeers = favbeer.map((beer) => {
        return <li>{beer.name}</li>

    })





    
    return (
        <>
            <h1>Our Favourite Beers</h1>
            <ul>
            <h7>{ourFavouriteBeers}</h7>
            </ul>
        </>
    );
}

export default FavouriteBeer;