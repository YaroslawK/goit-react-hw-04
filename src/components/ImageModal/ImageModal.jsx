import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      {image && (
        <div className="modal-content">
          <img src={image.urls.regular} alt={image.description} />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;