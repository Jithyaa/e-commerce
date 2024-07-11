import React, { useState } from 'react'
import '../scss/styles/addproduct.scss'

const AddProduct = () => {
    const [photos, setPhotos] = useState([]);
    const [variants, setVariants] = useState(['']);

    const handlePhotoChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const newPhotos = [...photos];
            newPhotos[index] = URL.createObjectURL(file);
            setPhotos(newPhotos);
        }
    };

    const handleVariantChange = (e, index) => {
        const newVariants = [...variants];
        newVariants[index] = e.target.value;
        setVariants(newVariants);
    };

    const addVariantField = () => {
        setVariants([...variants, '']);
    };

    return (
        <div className="add-product">
            <div className="add-product__header">
                <h1>Add Product</h1>
            </div>
            <div className="add-product__form">
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" />
                </div>
                <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5" // Adjust rows as needed
              className="description-input"
            ></textarea>
          </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Photos</label>
                    <div className="photo-upload">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="photo-upload__item">
                                <input
                                    type="file"
                                    id={`photo-${index}`}
                                    accept="image/*"
                                    onChange={(e) => handlePhotoChange(e, index)}
                                />
                                <label htmlFor={`photo-${index}`}>
                                    {photos[index] ? (
                                        <img src={photos[index]} alt="Product" />
                                    ) : (
                                        <span>Add Photo</span>
                                    )}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="form-group">
                    <label>Variants</label>
                    {variants.map((variant, index) => (
                        <input
                            key={index}
                            type="text"
                            value={variant}
                            onChange={(e) => handleVariantChange(e, index)}
                            placeholder={`Variant ${index + 1}`}
                        />
                    ))}
                    <button type="button" onClick={addVariantField}>
                        Add Variant
                    </button>
                </div>
                <button type="button" className="continue-button">
                    Continue
                </button>
            </div>
        </div>
    );
};
export default AddProduct
