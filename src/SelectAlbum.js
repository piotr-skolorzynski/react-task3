import { useState, useEffect } from 'react';
import { useGlobalContext } from "./context";

const SelectAlbum = () => {

    const { photosToShow, setPhotosToShow, photos, categories } = useGlobalContext();
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleChange = e => {
            setSelectedCategory(e.target.value);
        };

    useEffect(() => {
        if (selectedCategory === 'all') {
            setPhotosToShow(photos);           
        } else {
            const filteredPhotos = photos.filter(photo => photo.albumId === parseInt(selectedCategory));
            setPhotosToShow(filteredPhotos)
        }
    }, [selectedCategory]);

    return (
        <form style={{display: 'flex', color: 'white', padding: '20px', justifyContent: 'space-between', width: '350px', fontSize: '18px'}}>
        <label htmlFor='album-select'>
            Choose Album
        </label>
        <select onChange={handleChange}>
            <option key='0' value="all">Choose All</option>
            {photosToShow && 
                categories.map(category => {
                    return <option key={category} value={category}>{category}</option>
                })
            }
        </select>
        </form>
    );
}
 
export default SelectAlbum;