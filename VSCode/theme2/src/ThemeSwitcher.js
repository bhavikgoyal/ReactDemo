import React, { useState, useEffect } from 'react';
// import Theme1 from './Theme1'; 
import Theme2 from './Theme2'; 
import FileUploader from './FileUploader';
import './Themetwo.css';

const ThemeSwitcher = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [favicon, setFavicon] = useState('');

  // const handleTheme1Click = () => {
  //   setSelectedTheme('theme1');
  // };
  useEffect(() => {
    handleTheme2Click();
    const storedFavicon = sessionStorage.getItem('favicon');
    document.getElementById('dynamic-favicon').setAttribute('href', storedFavicon);
    setFavicon(storedFavicon);
  }, []);

  const handleTheme2Click = () => {
    setSelectedTheme('theme2');
  };
  
  const handleFileChange = (file) => {
    const filePath = `Image/${file.name}`;
    document.getElementById('dynamic-favicon').setAttribute('href', filePath);
    sessionStorage.setItem('favicon', filePath);
    setFavicon(filePath);
  };

  return (
    <>
      <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"> <FileUploader onFileChange={handleFileChange} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <button type="button" className="btn btn-primary btn-sm themeOne" onClick={() => window.location.href = 'http://localhost:3000/'}>Theme 1</button>
              <button type="button" className="btn btn-primary btn-sm themeOne mobileview" onClick={handleTheme2Click} disabled={selectedTheme === 'theme2'}>Theme2</button>
            </div>
          </div>
        </nav>
      </div>
      {/* {selectedTheme === 'theme1' && <Theme1 />} */}
      {selectedTheme === 'theme2' && <Theme2 />}
    </>
  );
};

export default ThemeSwitcher;
