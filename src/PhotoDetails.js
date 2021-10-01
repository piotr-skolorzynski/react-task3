import { useGlobalContext } from "./context";

const PhotoDetails = ({title, thumbnailUrl, url}) => {
    const {openModal} = useGlobalContext();
    return (
            <tr>
                <td className="photo-title" onClick={() => openModal(url)}>
                    {title}
                </td>
                <td>
                    <img src={thumbnailUrl} alt={title} />
                </td>
            </tr>
    );
}

export default PhotoDetails;