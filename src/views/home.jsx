// import Gamecard from "../component/gamecard";
import "../views/home.css";
import list_images from "../component/gamecard";

function home() {
  return (
    <div className="containner">
      <img width="7%" src="/Pictures/codashop-logo.png" />
      <i>วิธีที่เร็วที่สุดและง่ายที่สุดในการซื้อเครดิตเกม</i>
      <p>
        <h2>รับเงินคืนเมื่อเติมด้วย Codacash</h2>
      </p>
      {/* <div className="header">{list_images}</div> */}
      <div className="container">
        <div className="row nopadding ">{list_images}</div>
      </div>
    </div>
  );
}
export default home;
