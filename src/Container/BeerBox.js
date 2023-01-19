import React, {useState, useEffect} from 'react'
import BeerList from '../Component/BeerList'
import MoreBeerDetail from '../Component/MoreBeerDetail'



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





    return (
        <>
            {!beerDetail && <BeerList beers={beers} getmoreBeerDetail={getmoreBeerDetail}/>}
            {beerDetail && <MoreBeerDetail beer={beerDetail} />}
        </>
    );
}






export default BeerBox;