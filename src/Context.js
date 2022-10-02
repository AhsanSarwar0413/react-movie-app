import React, { useContext, useEffect, useState } from "react";

//Context : Warehouse
//Provider: Delivery Boy
//Consumer/ useContext() : Customer/you



const AppContext = React.createContext();
export const API_URL = `https://www.omdbapi.com/?apikey=c186dbef`
const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: false, message: "" });
    const [searchQuery, setSearchQuery] = useState("Titanic")

    const getMovies = async (API_URL) => {
        setIsLoading(true);
        try {
            const data = await fetch(API_URL)
                .then(response => response.json());
            console.log(data.Reponse);
            if (data.Response === "True") {
                setMovie(data);
                setIsLoading(false);
                setIsError({ show: false, message: null });
            } else {
                setIsError({ show: true, message: data.Error });
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        let queryTimer = setTimeout(() => {
            getMovies(`${API_URL}&s=${searchQuery}`);
        }, [800])

        return () => clearTimeout(queryTimer);
    }, [searchQuery])


    return (
        <AppContext.Provider value={{ isLoading, movie, isError, setSearchQuery, getMovies }}>
            {children}
        </AppContext.Provider>
    )
}



const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
