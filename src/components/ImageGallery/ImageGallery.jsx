import ImageCard from "./ImageCard/ImageCard";
import css from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGalleryList}>
      {images.map((image) => (
          <li key={image.id} className={css.imageGalleryItem}>
              <ImageCard image={ image } />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;