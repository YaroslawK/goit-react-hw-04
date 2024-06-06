import { useState } from 'react';
import './App.css';
import getImages from './images-api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  const onSubmit = async (query) => {
    try {
      const images = await getImages(query);
      setImages(images);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div>
        <SearchBar onSubmit={onSubmit} />
        {error && <p>Помилка: {error}</p>}
        
        <ImageGallery images={images} />
      </div>
    </>
  );
}

export default App;
