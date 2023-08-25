import React, { useState } from 'react';
import './Uploadcontent.css'; 


function UploadComponent() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };




 

  return (
    <div className='uploader-container'>
      <h3 className='uploader-heading'>Upload Questions</h3>
      <input
        type='file'
        accept='image/*'
        className='uploader-input'
        onChange={handleFileChange}
      />
      {selectedFile && (
        <div className='selected-image'>
          <img src={URL.createObjectURL(selectedFile)} alt='Selected' />
        </div>
      )}

      <button className='upload_btn'>Upload</button>
    </div>
  
  );
}

export default UploadComponent;
