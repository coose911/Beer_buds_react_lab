import React, {useState, useEffect} from 'react'
import BeerList from '../Component/BeerList'
import MoreBeerDetail from '../Component/MoreBeerDetail'
import FavouriteBeer from '../Component/FaveBeer'



const BeerBox = () => {

    const [beers, setBeers] = useState([])
    const [beerDetail, setBeerDetail] = useState('')
    const [faveBeer, setFaveBeer] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])


    const loadBeers = () => {
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beerList => setBeers(beerList))
    }

    const getmoreBeerDetail = (beerObject) => {
        setBeerDetail(beerObject)
    }

    const addFaveBeerToList = (faveBeerObject) => {
        const newFaveBeerList = [...faveBeer, faveBeerObject]
        setFaveBeer(newFaveBeerList)
    }


    return (
        <>
            {!beerDetail && <BeerList beers={beers} getmoreBeerDetail={getmoreBeerDetail} addFaveBeerToList ={addFaveBeerToList} />}
            {beerDetail && <MoreBeerDetail beer={beerDetail} />}
            {!beerDetail && <FavouriteBeer favbeer={faveBeer}/>}
        </>


    );
} 






export default BeerBox;