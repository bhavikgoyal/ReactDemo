import React, { useState, useEffect } from 'react';

const MyComponent2 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(null);
  const [file, setFile] = useState(null);
  const [bgImageUrl, setBgImageUrl] = useState('');
  const storedBgImageUrl1 = sessionStorage.getItem('bgImageUrl1');

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

  useEffect(() => {
    handleFetchData('https://localhost:7241/api/HomeBanner');
    setTheme('theme2');
    setBgImageUrl(storedBgImageUrl1 || '');
  }, []);
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    const fileUrl = URL.createObjectURL(uploadedFile);
    setBgImageUrl(fileUrl);
    sessionStorage.setItem('bgImageUrl1', fileUrl);
  };

  return (
    <>
      <section className="banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-4">
              <div className="first-line">
                <img src="image/image-1.png" width="500px" className="img-fluid rotate pd-img" alt="" />
                <img src="image/image-3.png" width="500px" className="img-fluid rotate" alt="" />
              </div>
            </div>
            <div className="col-md-4 col-4 dataFlexBox">
              <div className='row'>
                <div className='col-md-5'>
                  <div className='box text-center'>
                    <h3>
                     <span> ID</span><br />{data ? data.id : ''}
                    </h3>
                  </div>
                </div>
                <div className='col-md-5 offset-md-1'>
                  <div className='box text-center'>
                    <h3>
                    <span> Host</span><br />{data ? data.host : ''}
                    </h3>
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col-md-5'>
                  <div className='box text-center'>
                    <h3>
                    <span> IsActive</span><br />{data ? data.isActive.toString() : ''}
                    </h3>
                  </div>
                </div>
                <div className='col-md-5 offset-md-1'>
                  <div className='box text-center'>
                    <h3>
                    <span> ThemeName</span><br />{data ? data.themeName : ''}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="last-line">
                <img src="image/image-2.png" width="500px" className="img-fluid rotate2 pd-img2" alt="" />
                <img src="image/image-6.png" width="500px" className="img-fluid rotate2" alt="" />
                {/* <img src="image/image-7.png" width="350px" className="img-fluid rotate2 pd-img2" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slider-bg2">
        <div className="container">
          <div className="col-md-12">
            <h1 className="heading-slider"></h1>
          </div>
        </div>
        <section className="img-slider text-center" style={{ backgroundImage: `url(${bgImageUrl})` }}>
        <input className="heading-slider inputFile" type='file' onChange={handleFileChange} text='he'/>
        </section>
      </section>
    </>
  );
};

export default MyComponent2;
