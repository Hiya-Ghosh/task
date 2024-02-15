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
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <h3 style={{ marginRight: '20px', marginBottom: '0' }}>Upload File</h3>
  <form style={{ display: 'flex', alignItems: 'center', marginBottom: '0' }}>
    <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      style={{ marginBottom: '10px', marginRight: '10px' }}
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
