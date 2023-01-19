import React, {useState, useEffect} from 'react'
import BeerList from '../Component/BeerList'



const BeerBox = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
        
    }, [])
    console.log(beers)

    const loadBeers = () => {
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beerList => setBeers(beerList))
    }









    return (
        <>
            <BeerList/>
        </>
    );
}






export default BeerBox;