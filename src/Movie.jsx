import React from 'react';
import './index.css';

export function Movie(props) {
    const {age, image, title} = props;

    return (
        <div className="movie">
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <img src={image} alt={title}/>
            </div>
            <div>{age}</div>
        </div>
    )
}