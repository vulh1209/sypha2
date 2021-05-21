import React from 'react'
import "./Card.css";

export default function Card({id,linkimg,title_,description,linklearnmore}) {
    return (
        <div className='card' id={id}>
            <img id={id} alt={id} src={linkimg}/>            
            <div className='card-title'>{title_}</div>
            <div className='card-description'>{description}</div>
            <a className='card-link' href={linklearnmore}>LEARN MORE</a>
        </div>
    )
}
