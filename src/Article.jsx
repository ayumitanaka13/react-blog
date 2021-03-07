import React, {useState} from 'react';
import LikeButton from './LikeButton'; 

const Article = (props) => {

    // let publishState = '';
    // if (props.isPublished) {
    //     publishState = 'Published';
    // } else {
    //     publishState = 'Unpublished';
    // }

    // USE STATE
    
    const [isPublished, togglePublished] = useState(false);

    return (
        <div>
            <h2>Title: {props.title}</h2>
            <p>Order: {props.order}</p>
            <label htmlFor="check">State</label>
            <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)} />
            <LikeButton />
            {/* <p>{publishState}</p> */}
            {/* <LikeButton count={props.count} /> */}
        </div>
    )
}

export default Article