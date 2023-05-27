import React from "react";
import { getImageUrl } from "../utils.js";

const ImageList = ({ images, onImageClick }) => {
const handleImageClick = (idx) => {
    onImageClick(idx);
};

const renderImageItem = (image, idx) => {
    const { farm, server, id, secret } = image;
    return (
    <li
        key={idx}
        className="image-item"
        onClick={() => handleImageClick(idx)}
    >
        <img src={getImageUrl(farm, server, id, secret)} alt="" width="300px" />
    </li>
    );
};

return (
    <ul className="h-flex sb">
    {images.map((image, idx) => renderImageItem(image, idx))}
    </ul>
);
};

export default ImageList;
