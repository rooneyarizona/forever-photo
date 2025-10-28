import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../photo/photoSlice";
import styles from "./Timeline.module.css";
import HamburgerMenu from "../ui/Hamburger";

function Timeline() {
  const dispatch = useDispatch();

  // Pull photo data and status from Redux store
  const { items: photoList, status, error } = useSelector((state) => state.photos);

  // Temporary user info (you’ll replace with Redux userSlice later)
  const isLoggedIn = true;
  const username = "Alastair";
  const photoCount = photoList?.length || 0;

  // Fetch photos on mount
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPhotos());
    }
  }, [status, dispatch]);

  function handlePhotoSelection(photo) {
    alert(`Selected photo: ${photo.title || "Untitled"}`);
  }

  return (
    <>
      <HamburgerMenu
        isLoggedIn={isLoggedIn}
        username={username}
        photoCount={photoCount}
      />

      <div className="mt-16 text-center">
        <h3>{username}’s Timeline</h3>

        {status === "loading" && <p>Loading photos...</p>}
        {status === "failed" && <p>Error: {error}</p>}

        {status === "succeeded" && photoList.length > 0 ? (
          photoList.map((photo, index) => (
            <img
              key={photo.id || index}
              src={photo.imageUrl}
              alt={photo.title || "Photo"}
              className={styles.thumbnails}
              onClick={() => handlePhotoSelection(photo)}
            />
          ))
        ) : (
          status === "succeeded" && <p>No photos to show yet.</p>
        )}
      </div>
    </>
  );
}

export default Timeline;
