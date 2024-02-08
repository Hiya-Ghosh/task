import React, { useState } from 'react';

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2>Upload Document</h2>
      <form >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginBottom: '10px' }}
        />
        {image && (
          <div>
            <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
        )}
      </form>
    </div>
  );
};

export default ImageUploadForm;
