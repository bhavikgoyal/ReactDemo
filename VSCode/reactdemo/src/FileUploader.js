import React, { useState } from 'react';
import './Themetwo.css'

const FileUploader = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileChange(file);
  };

  return (
    <div>
      <input type="file" className='navFile form-control '  onChange={handleFileChange} />
    </div>
  );
};

export default FileUploader;
