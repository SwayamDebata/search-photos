import React, { useState } from "react";
import { getImageUrl } from "../utils.js";

const PopUpImage = ({ image, onHide }) => {
const [showMeta, setShowMeta] = useState(false);

const onImageClick = (evt) => {
    evt.stopPropagation();
    setShowMeta(!showMeta);
};

const { title, farm, server, id, secret } = image;

return (
    <div className="image-popup-container" onClick={onHide}>
    <img
        className="popup-image"
        src={getImageUrl(farm, server, id, secret)}
        alt=""
        style={{ marginTop: "140px" }}
        onClick={onImageClick}
    />
    {showMeta && (
        <ul className="image-metadata">
        <li style={{ margin: "5px 0" }}>Title: {title}</li>
        <li style={{ margin: "5px 0" }}>ImageId: {id}</li>
        <li style={{ margin: "5px 0" }}>FarmId: {farm}</li>
        <li style={{ margin: "5px 0" }}>ServerId: {server}</li>
        <li style={{ margin: "5px 0" }}>SecretId: {secret}</li>
        </ul>
    )}
    </div>
);
};

export default PopUpImage;
