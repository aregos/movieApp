import React from 'react';

function Movie(props) {
    const {age, image, title} = props;
    return (
        <div>
            <div>{title}</div>
            <div>{image}</div>
            <div>{age}</div>
        </div>
    )
}