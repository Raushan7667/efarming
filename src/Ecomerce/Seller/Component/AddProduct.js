import React, { useState } from 'react';
import { Camera, Trash2, Plus, X } from 'lucide-react';
import axios from 'axios';

const AddProduct = () => {

    const fetchCategory= async()=>{
        try {
            let response=await axios.get("http://localhost:4000/api/v1/products/getallparentcategory")
            
        } catch (error) {
            
        }

    }
  const [productData, setProductData] = useState({
    fullShopDetails: '',
    name: '',
    parentcategory: '',
    category: '',
    description: '',
    tags: [],
    priceDetails: [{ price: '', discountedPrice: '', size: '', quantity: '' }],
    images: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePriceDetailChange = (index, e) => {
    const { name, value } = e.target;
    const newPriceDetails = [...productData.priceDetails];
    newPriceDetails[index][name] = value;
    setProductData(prev => ({
      ...prev,
      priceDetails: newPriceDetails
    }));
  };

  const addPriceDetail = () => {
    setProductData(prev => ({
      ...prev,
      priceDetails: [
        ...prev.priceDetails, 
        { price: '', discountedPrice: '', size: '', quantity: '' }
      ]
    }));
  };

  const removePriceDetail = (index) => {
    const newPriceDetails = productData.priceDetails.filter((_, i) => i !== index);
    setProductData(prev => ({ ...prev, priceDetails: newPriceDetails }));
  };

  const handleTagInput = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      setProductData(prev => ({
        ...prev,
        tags: [...prev.tags, e.target.value.trim()]
      }));
      e.target.value = '';
    }
  };

  const removeTag = (tagToRemove) => {
    setProductData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setProductData(prev => ({
      ...prev,
      images: [...prev.images, ...imageUrls]
    }));
  };

  const removeImage = (imageToRemove) => {
    setProductData(prev => ({
      ...prev,
      images: prev.images.filter(image => image !== imageToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log('Product Data:', productData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Full Shop Details</label>
          <input
            type="text"
            name="fullShopDetails"
            value={productData.fullShopDetails}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>
      <label className="block mb-1 mt-2">Category</label>
      <div className="mt-4 flex gap-2">
        
        <select
          name="category"
          value={productData.category}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>
    
        <select
          name="category"
          value={productData.category}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="block mb-2">Description</label>
        <textarea
          name="description"
          value={productData.description}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2">Tags</label>
        <div className="flex flex-wrap gap-2 mb-2">
          {productData.tags.map(tag => (
            <div key={tag} className="bg-blue-100 px-2 py-1 rounded flex items-center">
              {tag}
              <button 
                type="button"
                onClick={() => removeTag(tag)}
                className="ml-2 text-red-500"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Add Tag (Press Enter)"
          onKeyDown={handleTagInput}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2">Product Images</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="image-upload"
        />
        <label 
          htmlFor="image-upload" 
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          <Camera size={20} /> Upload Images
        </label>
        <div className="flex flex-wrap gap-2 mt-2">
          {productData.images.map(image => (
            <div key={image} className="relative">
              <img 
                src={image} 
                alt="Product" 
                className="w-24 h-24 object-cover rounded"
              />
              <button
                type="button"
                onClick={() => removeImage(image)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="block mb-2">Price & Sizes</label>
        {productData.priceDetails.map((detail, index) => (
          <div key={index} className="grid grid-cols-4 gap-2 mb-2">
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={detail.price}
              onChange={(e) => handlePriceDetailChange(index, e)}
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              name="discountedPrice"
              placeholder="Discounted Price"
              value={detail.discountedPrice}
              onChange={(e) => handlePriceDetailChange(index, e)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="size"
              placeholder="Size"
              value={detail.size}
              onChange={(e) => handlePriceDetailChange(index, e)}
              className="p-2 border rounded"
              required
            />
            <div className="flex items-center">
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={detail.quantity}
                onChange={(e) => handlePriceDetailChange(index, e)}
                className="p-2 border rounded flex-grow"
                required
              />
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removePriceDetail(index)}
                  className="ml-2 text-red-500"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addPriceDetail}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded mt-2"
        >
          <Plus size={20} /> Add Price/Size
        </button>
      </div>

      <button
        type="submit"
        className="w-full mt-4 p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>
  );
};



export default AddProduct