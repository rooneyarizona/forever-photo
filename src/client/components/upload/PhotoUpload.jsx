import axios from "axios";
import PhotoUploadForm from "./PhotoUploadForm";

function PhotoUpload() {
  const handleFormSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:5001/api/upload", values);
      console.log("Photo uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  return (
    <div>
      <h1>Upload Photo</h1>
      <PhotoUploadForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default PhotoUpload;
