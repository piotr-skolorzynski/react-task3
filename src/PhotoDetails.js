const PhotoDetails = ({id, title, thumbnailUrl}) => {
    return (
            <tr key={id}>
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