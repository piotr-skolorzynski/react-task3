import { useState, useEffect } from 'react';
import Wrapper from './Wrapper';
import Table from 'react-bootstrap/Table';

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => data.filter(item => item.albumId <= 5))
      .then(filteredAlbums => {
        setIsLoading(false);
        // console.log(filteredAlbums);
        setPhotos(filteredAlbums);
      });
  }, []);

  const handleClick = e => {
    console.log(e.target.closest('tr'))
  }

  return (
    <>
    <Wrapper>
    <Table borderless variant="dark" className="table-wrapper"> 
      <thead >
        <tr>
          <th>Title</th>
          <th>Thumbnail</th>
        </tr>
      </thead>
      <tbody>
            {isLoading && 
                <tr>
                  <td>Loading...</td>
                  <td></td>
                </tr>}
            {photos && photos.map(photo => {
              const {id, title, thumbnailUrl} = photo;
              return (
                <>
                <tr key={id}>
                  <td className="photo-title" onClick={e => handleClick(e)}>{title}</td>
                  <td>
                    <img src={thumbnailUrl} alt={title} />
                  </td>
                </tr>
                </>
                )
            })}
      </tbody>
    </Table>
    </Wrapper>
    </>
  );
}

export default App;
