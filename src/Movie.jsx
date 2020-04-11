import React from 'react';
import './index.css';

export function Movie(props) {
    const {year, image, title} = props;

    return (
        <div className="movie">
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <img src={image} alt={title}/>
            </div>
            <div>{year}</div>
        </div>
    )
}