import { Link, NavLink } from "react-router-dom";

function CountriesList (props) {

    const { countries } = props;
 
    return (
        countries.map((countrie) => {
            return (
                    <Link 
                        className="list-group-item list-group-item-action" 
                        to={`/${countrie.alpha3Code}`}>
                        <h3>{countrie.name.common}</h3>
                    </Link>
            ) 
        })
    )
}

export default CountriesList;