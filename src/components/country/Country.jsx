import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false)

    

    const handleVisited = () => {
        setVisited(!visited)
    }

    
    return (
        <div className={`country ${visited ? 'marked' : 'going'}`}>
            <p style={{fontWeight: 900}}>Name of the country is: {name.common}</p>
            {/* <p>Located at: {official}</p> */}
            <img width={"100%"} src={flags.png} alt="" />
            <p style={{color: visited ? 'blue' : 'purple' }}>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>handleVisitedCountry(country)}>Make as visited</button>
            <button onClick={()=>handleVisitedFlag(country.flags.png)}>Add flags</button><br/><br/>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country': 'I want to visit this country'}
        </div>
    );
};

export default Country;