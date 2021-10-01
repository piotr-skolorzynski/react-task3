import { useGlobalContext } from "./context";
import PhotoDetails from "./PhotoDetails";

const Photos = () =>{
    const {photosToShow} = useGlobalContext();
    return photosToShow.map(photo => <PhotoDetails key={photo.id} {...photo} />)
}; 

export default Photos;