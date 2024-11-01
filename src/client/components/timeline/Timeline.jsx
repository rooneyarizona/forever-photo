import { useEffect, useState } from "react";
import styles from "./Timeline.module.css";


function Timeline() {
  const [photoList, setPhotoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPhotos() {
      try {
        const res = await fetch(`http://localhost:5000/api/photos`);

        if (!res.ok) {
          throw new Error("Network issue");
        }
        const data = await res.json();
        setPhotoList(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    }
    getPhotos();
  }, []);

  return (
    <>
   <div>
   {photoList.length > 0 ? (
          photoList.map((photo) => (
            <h1>{photo.userId}</h1>))): <p>No Photos</p>}
        </div>
       <div>
      <button className={styles.testButton}>Photo</button>
      <button className={styles.testButton}>Photo</button>
      <button className={styles.testButton}>Photo</button>
      <button className={styles.testButton}>Photo</button>
      </div>
    </>
  );
}

export default Timeline;
