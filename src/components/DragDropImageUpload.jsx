
import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

const DragDropImageUpload = () => {
    const [image, setImage] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const onDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const onDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if (files.length === 0) return;
        handleFiles(files[0]);
    };

    const onFileInputChange = (e) => {
        const files = e.target.files;
        if (files.length === 0) return;
        handleFiles(files[0]);
    };

    const handleFiles = (file) => {
        if (!file.type.startsWith('image/')) {
            alert("Please upload an image file.");
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const removeImage = (e) => {
        e.stopPropagation(); // Prevent triggering the click to upload
        setImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="w-full max-w-md mx-auto p-4">
            <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Upload Image</h2>
            <div
                className={`
                    relative w-full h-64 border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300
                    ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100/50'}
                    ${image ? 'border-solid border-transparent p-0 overflow-hidden' : ''}
                `}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                onClick={handleClick}
            >
                <input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    accept="image/*"
                />

                {image ? (
                    <div className="relative w-full h-full group">
                        <img
                            src={image}
                            alt="Uploaded preview"
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                            <button
                                onClick={removeImage}
                                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg transform hover:scale-110"
                                title="Remove Image"
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400 p-6 text-center">
                        <div className={`
                            mb-3 p-4 rounded-full bg-white shadow-sm
                            ${isDragging ? 'text-blue-500 scale-110' : 'text-gray-400'}
                             transition-all duration-300
                        `}>
                            <Upload size={32} />
                        </div>
                        <p className="text-sm font-medium text-gray-600">
                            <span className="text-blue-500 hover:underline">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DragDropImageUpload;
