import React, { useState, useContext } from 'react';
import { uploadMovie } from '../../apis/movies';
import Text from '../Text';
import Close from '../../assets/close.png';
import AuthContext from "../../context/AuthContext.js";
import ProgressBar from '../ProgressBar/index.jsx';
import './styles.css';

const UploadMovie = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [isUploadCompleted, setIsUploadCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { isOpenModal, setIsOpenModal, allMovies, setAllMovies } = useContext(AuthContext);

  const uploadFile = async () => {

    const duration = 7000;
    const interval = 100;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (currentStep >= steps) {
          clearInterval(timer);
          return 100;
        }
        currentStep += 1;
        return (currentStep / steps) * 100;
      });
    }, interval);

    try {
      const response = await uploadMovie({ image, title });
      await new Promise((resolve) => setTimeout(resolve, duration));
      setIsUploadCompleted(true);
      const transformResponseToMovie = {
        ...response,
        imageUrl: response.image,
        from: 'db',
      }
      setAllMovies([...allMovies, transformResponseToMovie])
    } catch (err) {
      console.error('Err uploadMovie:', err);
    } finally {
      setIsLoading(false);
      setProgress(0);
      setTitle('');
      setImage(null);
    }
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
    setIsUploadCompleted(false);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    uploadFile();
  };

  return (
    <div>
      {isUploadCompleted ?
        <>
          <div className="modal-overlay">
            <div className="modal">
              <div className='modal-container'>
                <div className='icon-close' onClick={onCloseModal}>
                  <img src={Close} alt='close' />
                </div>
                <Text color='#64EEBC' weight={700} customSize={26}>
                  LITEFLIX
                </Text>
                <Text color='#FFF' weight={700} customSize={22}>FELICITACIONES!</Text>
                <Text color='#FFF' weight={400} customSize={18}>{title ? title : 'LA PELICULA'} FUE CORRECTAMENTE SUBIDA</Text>
                <button className='button-home' onClick={onCloseModal}>IR A HOME</button>
              </div>
            </div>
          </div>
        </> :
        <>
          {isOpenModal && (
            <div className="modal-overlay">
              <div className="modal">
                <form onSubmit={handleSubmit}>
                  <div className='icon-close' onClick={onCloseModal}>
                    <img src={Close} alt='close' />
                  </div>
                  <Text color='#64EEBC' weight={700} customSize={24}>
                    Agregar Pelicula
                  </Text>
                  {isLoading ? (<ProgressBar progress={progress} />) :
                    (<input type="file" name="image" id="image" accept="image/*" onChange={handleImageChange} required />)
                  }
                  <input type="text" name="title" id="title" value={title} placeholder='TITULO' onChange={handleTitleChange} required />
                  <button type="submit">Subir Película</button>
                </form>
              </div>
            </div>
          )}</>}

    </div>
  );
};

export default UploadMovie;
