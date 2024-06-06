import { useState } from 'react';
import './App.css';
import getImages from './images-api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { Oval } from 'react-loader-spinner'

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (query) => {
    try {
      setIsLoading(true)
      const images = await getImages(query);
      setImages(images);
      setIsLoading(false)
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
        {isLoading && (<Oval
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />)}
        <ImageGallery images={images} />
      </div>
    </>
  );
}

export default App;
