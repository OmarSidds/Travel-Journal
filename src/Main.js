import React from 'react';
import './Main.css';

export default function Main(props) {
    return (
        <div className='mainContent'>
            <img src={props.item.img} className='locationPicture'/>
            <div className='textContent'>
                <div className='locationMap'>
                    <span class="material-symbols-outlined">location_on</span>
                    <h1>{props.item.name}</h1>
                    <a href={props.item.googleMaps}>View on Google Maps</a>
                </div>
                <h2>{props.item.attraction}</h2>
                <h3>{props.item.date}</h3>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}