import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [photos, setPhotos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [urlToModal, setUrlToModal] = useState('');

    useEffect(() => {
        //added timeout to simulate async effect
        const timeout = setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(res => res.json())
                .then(data => data.filter(item => item.albumId <= 5))
                .then(filteredAlbums => {
            setIsLoading(false);
            setPhotos(filteredAlbums);
        });
            return clearTimeout(timeout);
        }, 2000);
    }, []);

    const openModal = url => {
        setUrlToModal(url);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setUrlToModal('');
        setIsModalOpen(false);
    };

    return <AppContext.Provider
        value={{
                isLoading,
                setIsLoading,
                photos,
                setPhotos,
                isModalOpen,
                setIsModalOpen,
                openModal,
                closeModal,
                urlToModal
            }}>
                {children}
            </AppContext.Provider>
}
//custom hook to avoid imporing useContext and AppContext in each component
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};
