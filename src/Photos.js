import { useGlobalContext } from "./context";
import PhotoDetails from "./PhotoDetails";

const Photos = () =>{
    const {photos} = useGlobalContext();
    return photos.map(photo => <PhotoDetails key={photo.id} {...photo} />)
} 

export default Photos;