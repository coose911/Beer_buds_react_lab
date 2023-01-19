import React from 'react';
import Beer from './Beer';
import FaveBeer from './FaveBeer';
import MoreBeerDetail from './MoreBeerDetail';

const BeerList = ({beers, getmoreBeerDetail, addFaveBeerToList}) => {




    const listOfBeers = beers.map((beer) => {
        return (
            <Beer beer={beer} key={beer.id} getmoreBeerDetail={getmoreBeerDetail} addFaveBeerToList ={addFaveBeerToList}/>
        )
    })





    return (
        <>
            <ol>
            {listOfBeers}
            </ol>
        </>
    );
}

export default BeerList;