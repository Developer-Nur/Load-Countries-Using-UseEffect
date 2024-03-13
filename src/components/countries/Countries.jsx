import { useEffect, useState } from "react"
import Country from "../country/Country"
import './Countries.css'
const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setvisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        const newVisitedCountrys = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountrys)
    }

    const handleVisitedFlag = flag => {
        const newVisitedFlag = [...visitedFlags, flag];
        setvisitedFlags(newVisitedFlag);
    }

    return (
        <div>
            <h3>
                All countries: {countries.length}
            </h3>
            <div>
               {
                visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
               }
            </div>
            <div>
                <h5>Visited country: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.ccn3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country
                            key={country.ccn3}
                            country={country}
                            handleVisitedCountry={handleVisitedCountry}
                            handleVisitedFlag={handleVisitedFlag}
                        ></Country>)
                }
            </div>


        </div>
    )
}

export default Countries;