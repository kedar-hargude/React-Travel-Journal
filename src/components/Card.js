import React from "react"
import locationPin from "../images/location-pin.png"

export function Card(props){
    return(
        <div className="card">
            <img className="card--photo" src={props.imageUrl} />
            <div className="card--info-container">
                <div className="card--country-info">
                    <img src={locationPin} width="20px"></img>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google maps</a>
                </div>
                <h1>{props.title}</h1>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}