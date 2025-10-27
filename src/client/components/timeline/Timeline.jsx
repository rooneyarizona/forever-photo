import { useEffect, useState } from "react";
import styles from "./Timeline.module.css";
import img1 from "../../assets/IMG_0071.jpg";
import img2 from "../../assets/IMG_3082.jpg";
import img3 from "../../assets/IMG_3937.jpg";
import img4 from "../../assets/IMG_4845.jpg";
import HamburgerMenu from "../ui/Hamburger";

const imageArr = [img1, img2, img3, img4];

function Timeline() {
  const [photoList, setPhotoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const isLoggedIn = false;
  const username = "Alastair";
  const photoCount = 24;

  useEffect(() => {
    async function getPhotos() {
      try {
        const res = await fetch(`http://localhost:5000/api/photos`);
        if (!res.ok) throw new Error("Network issue");
        const data = await res.json();
        setPhotoList(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
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
      <HamburgerMenu
        isLoggedIn={isLoggedIn}
        username={username}
        photoCount={photoCount}
      />

      <div className="mt-16 text-center">
        <h3>Testy One</h3>
        {imageArr.map((src, index) => (
          <img
            key={index}
            src={src}
            className={styles.thumbnails}
            onClick={handlePhotoSelection}
          />
        ))}
      </div>
    </>
  );
}

export default Timeline;
