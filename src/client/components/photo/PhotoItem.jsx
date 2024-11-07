import styles from "./PhotoItem.module.css";
import photo from "../../assets/dummyphoto.jpg";
import { useState } from "react";
import Comment from "../comment/Comment";

function PhotoItem() {
  const [photoItem, setPhotoItem] = useState("");

  return (
    <>
    <div className={styles.photoItemContainer}>
      <button>Previous</button>
      <span>
        <img classname={styles.photoModify} src={photo} alt="dummy" />
      </span>
      <button>Next</button>
    </div>
    <div>
        <Comment />
    </div>
    </>
  );
}

export default PhotoItem;
