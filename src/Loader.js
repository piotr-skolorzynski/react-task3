import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

const Loader = () => {
    return (
        <Button variant="light" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
                Loading...
        </Button>
    );
}
 
export default Loader;