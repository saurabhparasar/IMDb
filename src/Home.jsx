import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import "./Home.css";
function Home()  {
    <div>
    <div className="home"/>
    <div className="home__image"/>
    <div className="home__row"/>
    </div>
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

    useEffect( async () =>  {
		

		let response = await fetch('http://www.omdbapi.com/?s=action&apikey=db9a8242');
		let responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		};
    },[])

