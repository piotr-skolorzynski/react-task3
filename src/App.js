import Wrapper from './Wrapper';
import Loader from './Loader';
import PhotoTable from './PhotoTable';
import { useGlobalContext } from './context';

function App() {
  const {isLoading} = useGlobalContext();

  return (
    <>
    <Wrapper className="app-container">
    {isLoading && <Loader />}
    {!isLoading && <PhotoTable />}
    </Wrapper>
    </>
  );
}

export default App;
