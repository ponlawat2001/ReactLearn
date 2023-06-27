const images = [
  {
    title: "Honkai Star Rail (Voucher Code)",
    id: 0,
    image_url: "/Pictures/honkai.jpg",
  },
  {
    title: "VALORANT",
    id: 1,
    image_url: "Pictures/valorant.png",
  },
  {
    title: "FIFA-Mobile",
    id: 2,
    image_url: "Pictures/FIFA-Mobile.png",
  },
  {
    title: "League of Legends",
    id: 3,
    image_url: "Pictures/TH-LOL.jpg",
  },
  {
    title: "ZEPETO",
    id: 4,
    image_url: "Pictures/zepeto_tile.png",
  },
  {
    title: "Roblox",
    id: 5,
    image_url: "Pictures/robloxlogo_new.png",
  },
  {
    title: "League of Legends: Wild Rift",
    id: 6,
    image_url: "Pictures/TH_lolwildrift.jpg",
  },
  {
    title: "MU ORIGIN 3",
    id: 7,
    image_url: "Pictures/mu3_th.png",
  },
  {
    title: "PlayStation Vouchers",
    id: 8,
    image_url: "Pictures/psn_store.jpg",
  },
  {
    title: "Codacash Gift Code",
    id: 9,
    image_url: "Pictures/codacash.jpeg",
  },
  {
    title: "Steam Wallet Codes (THB)",
    id: 10,
    image_url: "Pictures/steam_wallet.jpg",
  },
  {
    title: "Entropy 2099",
    id: 11,
    image_url: "Pictures/entropy.jpeg",
  },
  {
    title: "ONE PUNCH MAN: The Strongest",
    id: 12,
    image_url: "Pictures/opmtsg.jpg",
  },
  {
    title: "Identity V",
    id: 13,
    image_url: "Pictures/idttv.jpg",
  },
  {
    title: "Echocalypse",
    id: 14,
    image_url: "Pictures/Echocalypse.jpg",
  },
];

import "./gamecard.css";
const list_images = images.map((image) => (
  <div className="col imagebox">
    <img width="200px" src={image.image_url} className="roundConners" />
    <div className="textonimage">{image.title}</div>
    <button className="btn btn-primary">adskjads</button>
  </div>
));
export default list_images;
