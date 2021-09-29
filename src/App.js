import Wrapper from './Wrapper';
import Loader from './Loader';
import PhotoTable from './PhotoTable';
import { useGlobalContext } from './context';
import PhotoModal from './PhotoModal';
import SelectAlbum from './SelectAlbum';

function App() {
  const {isLoading} = useGlobalContext();

  return (
    <>
    <Wrapper className="app-container">
    <PhotoModal />
    {isLoading && <Loader />}
    {!isLoading && <SelectAlbum />}
    {!isLoading && <PhotoTable />}
    </Wrapper>
    </>
  );
}

export default App;
