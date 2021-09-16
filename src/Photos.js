import PhotoDetails from "./PhotoDetails";

const Photos = ({photos}) => photos.map(photo => <PhotoDetails {...photo} />)

export default Photos;