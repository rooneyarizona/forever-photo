import styles from "./PhotoItem.module.css";
import photo from "../../assets/dummyphoto.jpg";
import { useState } from "react";
import Comment from "../comment/Comment";
import Loading from "../ui/Loading";

function PhotoItem() {
  const [photoItem, setPhotoItem] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function changeLoadingState(){
    setIsLoading(false);
  }

  return (
    <>
    {isLoading && <Loading />}
    <div className={styles.photoItemContainer}>
      <button>⏮️</button>
      <span>
        <img classname={styles.photoModify} src={photo} alt="dummy" />
      </span>
      <button>⏩</button>
    </div>
    <div>
        <Comment />
    </div>
    </>
  );
}

export default PhotoItem;
