import Table from "react-bootstrap/Table";
import Photos from "./Photos";

const PhotoList = () => {
    return (
        <Table borderless variant="dark" className="table-wrapper"> 
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Thumbnail</th>
                </tr>
            </thead>
            <tbody>
                <Photos />
            </tbody>
        </Table>
    );
}

export default PhotoList;