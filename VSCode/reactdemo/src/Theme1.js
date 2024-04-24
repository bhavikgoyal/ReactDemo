import React, { useState, useEffect } from 'react';
import './App.css';
import './Themeone.css';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(null);
  const [file, setFile] = useState(null);
  const [bgImageUrl, setBgImageUrl] = useState('');
  const storedBgImageUrl = localStorage.getItem('bgImageUrl');

  const handleFetchData = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
    }
  };

  const handleTheme1Click = () => {
    handleFetchData('https://localhost:7241/api/Favicon');
    setTheme('theme1');
    setBgImageUrl(storedBgImageUrl);
  };

  useEffect(() => {
    handleTheme1Click();
  }, []);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    const fileUrl = URL.createObjectURL(uploadedFile);
    setBgImageUrl(fileUrl);
    localStorage.setItem('bgImageUrl', fileUrl);
  };

  return (
    <>
      <section className='bannerImg' style={{ backgroundImage: `url(${bgImageUrl})` }}>
        <div className='center-content'>
          <input type='file' onChange={handleFileChange} />
        </div>
      </section>
      <div className='container-fluid mainDataDiv'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='dataDiv'>
              <div className='container'>
                <div className='row'>
                  {error ? (
                    <p>Error: {error}</p>
                  ) : (
                    <>
                      {data && (
                        <>
                          <div className='col-lg-3 col-md-6'>
                            <div className='themeData'>
                              <h1>ID<br/> <span>{data.id}</span></h1>
                            </div>
                          </div>
                          <div className='col-lg-3 col-md-6'>
                            <div className='themeData'>
                              <h1>Host<br/><span>{data.host}</span></h1>
                            </div>
                          </div>
                          <div className='col-lg-3 col-md-6'>
                            <div className='themeData'>
                              <h1>IsActive <br/> <span>{data.isActive.toString()}</span></h1>
                            </div>
                          </div>
                          <div className='col-lg-3 col-md-6'>
                            <div className='themeData'>
                              <h1>ThemeName <br/> <span>{data.themeName}</span></h1>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyComponent;
