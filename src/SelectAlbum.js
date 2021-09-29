import { useState, useEffect } from 'react';
import { useGlobalContext } from "./context";

const SelectAlbum = () => {

    const { photos, setPhotos, categories, setIsLoading } = useGlobalContext();
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleChange = e => {
        setSelectedCategory(e.target.value);
    };

    useEffect(() => {
        if (selectedCategory === 'all') {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(res => res.json())
                .then(data => data.filter(item => item.albumId <= 5))
                .then(filteredAlbums => {
            setIsLoading(false);
            setPhotos(filteredAlbums);
            })            
        } else {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(res => res.json())
                .then(data => data.filter(item => item.albumId <= 5))
                .then(filteredAlbums => {
            setIsLoading(false);
            const filteredPhotos = filteredAlbums.filter(photo => photo.albumId === parseInt(selectedCategory));
            setPhotos(filteredPhotos)
            })
        }
    }, [selectedCategory]);

    return (
        <form style={{display: 'flex', color: 'white', padding: '20px', justifyContent: 'space-between', width: '350px', fontSize: '18px'}}>
        <label htmlFor='album-select'>
            Choose Album
        </label>
        <select onChange={handleChange}>
            <option key='0' value="all">Choose All</option>
            {photos && 
                categories.map(category => {
                    return <option key={category} value={category}>{category}</option>
                })
            }
        </select>
        </form>
    );
}
 
export default SelectAlbum;