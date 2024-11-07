import { useEffect, useState } from "react";
import styles from "./Timeline.module.css";

import img1 from "../../assets/IMG_0071.jpg";
import img2 from "../../assets/IMG_3082.jpg";
import img3 from "../../assets/IMG_3937.jpg";
import img4 from "../../assets/IMG_4845.jpg";
import img5 from "../../assets/IMG_0108.jpg";

const imageArr = [img1, img2, img3, img4, img5];

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

  function handlePhotoSelection() {
    alert("Photo selected");
    
  }

  return (
    <>
      
      <div>
        {imageArr.map((src, index) => (
          <img key={index} src={src} className={styles.thumbnails} onClick={handlePhotoSelection}/>
        ))}
        {/* <img className={styles.thumbnails} src={img1} />
        <img src={img2} className={styles.thumbnails}/>
        <img src={img3} className={styles.thumbnails}/>
        <img src={img4} className={styles.thumbnails}/>
        <img src={img5} className={styles.thumbnails}/> */}
      </div>
    </>
  );
}

export default Timeline;
