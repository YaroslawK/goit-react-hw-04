import { useState } from 'react';
import './App.css';
import getImages from './images-api';
import SearchBar from './components/SearchBar/SearchBar';

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
        <div>
          {images.map((image) => (
            <img key={image.id} src={image.urls.small} alt={image.description} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
