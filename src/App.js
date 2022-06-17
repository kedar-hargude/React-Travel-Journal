import React from "react"
import { Header } from "./components/Header"
import { Card } from "./components/Card"
import data from "./data"

export function App(){
    const newData = data.map(ele => <Card 
            title = {ele.title}
            location = {ele.location}
            googleMapsUrl = {ele.googleMapsUrl}
            startDate = {ele.startDate}
            endDate = {ele.endDate}
            description = {ele.description}
            imageUrl = {ele.imageUrl}
        />)
        
    return(
        <div className="container">
            <Header />
            {newData}
        </div>
    )
}