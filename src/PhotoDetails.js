const PhotoDetails = ({id, title, thumbnailUrl, url}) => {
    return (
            <tr>
                <td className="photo-title">
                    {title}
                </td>
                <td>
                    <img src={thumbnailUrl} alt={title} />
                </td>
            </tr>
    );
}
 
export default PhotoDetails;