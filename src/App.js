import './App.css';

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"

import axios from "axios";

//import countries from './countries.json'

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {

  	const [listCountries, setCountries] = useState([])

	useEffect(() => {

		axios
		.get("https://ih-countries-api.herokuapp.com/countries")
		.then((response) => {
			setCountries(response.data)
		})
		.catch(error => console.error(error))
	}, [])

  return (
    <div className="App">
      	<Navbar />

		  <div className="container">
			<div className="row">
				<div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
					<div className="list-group">
						<CountriesList countries={listCountries} />
					</div>
						
				</div>
				<Routes>
					<Route path="/:id" element={ <CountryDetails country={listCountries} /> } />
				</Routes>
				 
			</div>
		</div>

    </div>
  );
}

export default App;
