import styles from "./PhotoItem.module.css"
import photo from "../../assets/dummyphoto.jpg"



function PhotoItem() {

    

    return (
        <div className={styles.photoContainer}>
            <button>Previous</button>
            <span><img classname={styles.photo} src={photo} alt="dummy"/></span>
            <button>Next</button>
        </div>
    )
}

export default PhotoItem
