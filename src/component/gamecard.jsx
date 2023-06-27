import images from "../model/item_data";
import "./gamecard.css";
const list_images = images.map((image) => (
  <div className="col">
    <div className="imagebox">
      <img src={image.image_url} className="roundConners" />
      <div className="textonimage">{image.title}</div>
    </div>
  </div>
));
export default list_images;
