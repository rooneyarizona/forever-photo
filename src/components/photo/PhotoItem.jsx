import styles from "./PhotoItem.module.css"
import photo from "../assets/dummyphoto.jpg";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoadingAnimate, fetchPhotoStart, fetchPhotoSuccess} from "./photoSlice";


function PhotoItem() {

    const dispatch = useDispatch();

    return (
        <div className={styles.photoContainer}>
            <button>Previous</button>
            <span><img classname={styles.photo} src={photo} alt="dummy"/></span>
            <button>Next</button>
        </div>
    )
}

export default PhotoItem
