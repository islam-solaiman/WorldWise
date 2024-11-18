
import { createContext, useEffect, useState } from "react";

const BASE_URL = 'http://localhost:8000';

const CitiesContext = createContext();

function CitiesProvider({children}){
    const [cities, setCities] = useState([]); 
    const [isLoading, SetIsLoading] = useState(false);

    useEffect(function() {
        async function fetchCities() {
        try {
            SetIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities`);
            const data = await res.json();
            setCities(data);
        } catch {
            alert("There was an error loading data ....");
        } finally {
            SetIsLoading(false);
        }
        }
        fetchCities();
    }, []);

    return <CitiesContext.Provider 
    value={{
        cities,
        isLoading,
        }}>
                {children}
            </CitiesContext.Provider>
}

export {CitiesProvider};