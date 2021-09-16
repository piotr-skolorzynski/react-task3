import { useState, useEffect } from 'react';
import Wrapper from './Wrapper';
import Loader from './Loader';
import PhotoTable from './PhotoTable';

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => data.filter(item => item.albumId <= 5))
        .then(filteredAlbums => {
          setIsLoading(false);
          // console.log(filteredAlbums);
          setPhotos(filteredAlbums);
        });
        return clearTimeout(timeout);
    }, 3000);
  }, []);

  return (
    <>
    <Wrapper className="app-container">
    {isLoading && <Loader />}
    {!isLoading && <PhotoTable photos={photos} />}
    </Wrapper>
    </>
  );
}

export default App;
