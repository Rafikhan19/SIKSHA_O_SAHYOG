import React, { useState } from 'react';
import profileapp from '../assets/profileapp.jpg';

const ProfileUploader = () => {
  const [imageSrc, setImageSrc] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageSrc(URL.createObjectURL(file));
  };

  return (
    <div className="profile-pic">
      <label className="-label object-center" htmlFor="file">
        <span className="glyphicon glyphicon-camera"></span>
        <span>Change profile</span> {/* Adding a label for the input */}
      </label>
      <input id="file" type="file" onChange={handleFileChange} />
      <img
        className='student_img'
        src={imageSrc || profileapp} // Use the selected image or the default image
        id="output"
        alt="Profile"
      />
    </div>
  );
};

export default ProfileUploader;

