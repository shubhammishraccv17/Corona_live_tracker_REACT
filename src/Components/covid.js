import { useEffect, useState } from "react";
import React from 'react';
import './covid.css';




const Covid = () => {
    const [data, setData] = useState([])
    const getCovidData = async() => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualdata = await res.json();
            setData(actualdata.statewise[0]);


        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);


    return ( < >
        <
        section >
        <
        h3 > LIVE < /h3>  <
        h2 > COVID - 19 CoronaVirus Tracker < /h2>  <
          <
        ul >
        <
        li className = "card" >
        <
        div className = "card_main" >
        <
        div className = "card_inner" >
        <
        p className = 'card_name' > < span > OUR < /span>Country</p >
        <
        p className = 'card_total card_small' > India < /p> < /
        div > < /div > < /li >


        <
        li className = "card" >
        <
        div className = "card_main" >
        <
        div className = "card_inner" >
        <
        p className = 'card_name' > < span > Total < /span>Cases</p >
        <
        p className = 'card_total card_small' > { data.confirmed } < /p> < /
        div > < /div > < /li >


        <
        li className = "card" >
        <
        div className = "card_main" >
        <
        div className = "card_inner" >
        <
        p className = 'card_name' > < span > Active < /span>Cases</p >
        <
        p className = 'card_total card_small' > { data.active } < /p> < /
        div > < /div > < /li >




        <
        li className = "card" >
        <
        div className = "card_main" >
        <
        div className = "card_inner" >
        <
        p className = 'card_name' > < span > Total < /span>Recovered</p >
        <
        p className = 'card_total card_small' > { data.recovered } < /p> < /
        div > < /div > < /li >




        <
        li className = "card" >
        <
        div className = "card_main" >
        <
        div className = "card_inner" >
        <
        p className = 'card_name' > < span > Total < /span> Deaths </p >
        <
        p className = 'card_total card_small' > { data.deaths } < /p> < /
        div > < /div > < /li >




        <
        li className = "card" >
        <
        div className = "card_main" >
        <
        div className = "card_inner" >
        <
        p className = 'card_name' > < span > Last < /span>Updated</p >
        <
        p className = 'card_total card_small' > { data.lastupdatedtime } < /p> < /
        div > < /div > < /li > < /ul > < /section >






        <
        / >
    )
}
export default Covid
