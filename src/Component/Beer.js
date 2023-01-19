import React from 'react'

const Beer = ({beer, getmoreBeerDetail, addFaveBeerToList}) => {



    const clicked = () => {
        getmoreBeerDetail(beer)
    }

    const clickingFaveBeer = () => {
        addFaveBeerToList(beer)
    }


    return (
        <>
            <li>
                <h2 onClick={clicked}>{beer.name} </h2>
                <p onClick={clickingFaveBeer}>'{beer.tagline}'</p>
            </li>
        </>
    );
}

export default Beer;