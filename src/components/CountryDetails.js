import { useParams } from 'react-router-dom'
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react"

import axios from "axios";


function CountryDetails (props) {

    const [countrie, setCountrie] = useState()

    const params = useParams()
    const id = params.id

    useEffect(() => {

        axios
        .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
        .then((response) => {
            setCountrie(response.data)
        })
        .catch(error => console.error(error))
    }, [id])

    return (
   
            <>
            {
                countrie && (
                 <div className="col-7">    
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${countrie.alpha2Code.toLowerCase()}.png`} alt=""/>
                    <h4>{countrie.name.common}</h4>

                    <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{countrie.name.common}</td>
                        </tr>
                        <tr>
                        <td>Area</td>
                        <td>
                            {countrie.area} Km
                            <sup>2</sup> 
                        </td>
                        </tr>
                        <tr>
                        <td>Borders</td>
                        <td>
                            <ul className="list-unstyled">
                            {
                                countrie.borders.map((elem) => {
                                    const border = props.country.find(element => element.alpha3Code === elem)
                                    return (
                                        <li><Link to={`/${border.alpha3Code}`}>{border.name.common }</Link></li>
                                    )
                                })
                            }
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                    </table> 
                    </div>
                ) 
            }
            </>

         
    )

}

export default CountryDetails;