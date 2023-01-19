import React from 'react';
import Beer from './Beer';
import FaveBeer from './FaveBeer';
import MoreBeerDetail from './MoreBeerDetail';

const BeerList = ({beers, getmoreBeerDetail}) => {

    const listOfBeers = beers.map((beer) => {
        return (
            <Beer beer={beer} key={beer.id} getmoreBeerDetail={getmoreBeerDetail}/>
            

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