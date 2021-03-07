import React, {useState, useEffect} from 'react'

const LikeButton = (props) => {
    //USE EFFECT
    const [count, counter] = useState(0);
    const [limit, release] = useState(true);
 
    const countUp = () => {
        counter(count +1)
    }

    useEffect(()=> {
        document.querySelector('#counter').addEventListener('click', countUp)
        if (count >= 10) {
            counter(0)
        }
        return () => {
            document.querySelector('#counter').removeEventListener('click', countUp)
        }
    }, [limit])

    return (
        <React.Fragment>   
            <button id={"counter"}>Like: {count}</button>
            <button onClick={() => release(!limit)}>More Like</button>
        </React.Fragment>
    )
}

export default LikeButton