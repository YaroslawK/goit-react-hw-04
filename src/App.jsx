import { useEffect, useState } from 'react';
import './App.css';
import getImages from './images-api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { Oval } from 'react-loader-spinner'

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      if (!query) return;

      try {
        setIsLoading(true);
        const newImages = await getImages(query, 10, page);
        setImages((prevImages) => (page === 1 ? newImages : [...prevImages, ...newImages]));
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [page, query]);

  const onSubmit = (searchQuery) => {
    if (searchQuery !== query) {
      setQuery(searchQuery);
      setPage(1); // Reset page to 1 when new query is submitted
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage error={error} />}
      {isLoading && (
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      <ImageGallery images={images} />
      {images.length > 0 && !isLoading && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
    </div>
  );
}



export default App;
