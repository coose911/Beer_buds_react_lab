import React from 'react'

const Beer = ({beer, getmoreBeerDetail}) => {

    const clicked = () => {
        getmoreBeerDetail(beer)
    }




    return (
        <>
            <li>
                <h2 onClick={clicked}>{beer.name} </h2>
                <p>'{beer.tagline}'</p>
            </li>
        </>
    );
}

export default Beer;