import Wrapper from './Wrapper';
import Loader from './Loader';
import PhotoTable from './PhotoTable';
import { useGlobalContext } from './context';
import PhotoModal from './PhotoModal';

function App() {
  const {isLoading} = useGlobalContext();

  return (
    <>
    <Wrapper className="app-container">
    <PhotoModal />
    {isLoading && <Loader />}
    {!isLoading && <PhotoTable />}
    </Wrapper>
    </>
  );
}

export default App;
