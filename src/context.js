import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => data.filter(item => item.albumId <= 5))
            .then(filteredAlbums => {
            setIsLoading(false);
            // console.log(filteredAlbums);
            setPhotos(filteredAlbums);
            });
            return clearTimeout(timeout);
        }, 2000);
    }, []);

    return <AppContext.Provider value={{isLoading, setIsLoading, photos, setPhotos}}>{children}</AppContext.Provider>
}
//custom hook to avoid imporing useContext and AppContext in each component
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};
