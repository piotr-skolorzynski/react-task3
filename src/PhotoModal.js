import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';

const PhotoModal = () => {

    const {isModalOpen, closeModal, urlToModal} = useGlobalContext();

    return (
        <div
            className={`${
                isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
        >
        <div className='modal-container'>
            <img src={urlToModal} alt="" />
            <button className='close-modal-btn' onClick={closeModal}>
                <FaTimes></FaTimes>
            </button>
        </div>
        </div>
    );
}
 
export default PhotoModal;
