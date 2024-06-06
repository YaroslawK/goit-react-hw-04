import css from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.description} className={css.imageGallery}/>
    </div>
  );
};

export default ImageCard;