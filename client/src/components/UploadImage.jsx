import { useState } from "react";
import "./UploadImage.css";
import {Cloudinary} from "@cloudinary/url-gen";

const UploadImage = () => {
  const [images, setImages] = useState([]);
  const [imageToRemove, setImageToRemove] = useState(null);

  const handleRemoveImg = () => {};

  const handleOpenWidget = () => {
    var myWidget = Cloudinary.createUploadWidget(
      {
        cloudName: "dumzvr9ih",
        uploadPreset: "fzl9vlnn",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
  };

  return (
    <div className="upload">
      <button onClick={() => handleOpenWidget()}>UPLOAD Images</button>
    </div>
  );
};

export default UploadImage;
