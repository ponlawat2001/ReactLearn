const images = [
  {
    id: 0,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW89LI5movz9W0ZI4xjFQWRE0opUihV79MLqbcMJ1LXfKWu7HUq-rT5OSCHjiuXnIaQLg&usqp=CAU",
  },
  {
    id: 1,
    image_url:
      "https://gamingintel.com/wp-content/uploads/2023/04/Honkai-Star-Rail-Departure-of-the-Express.jpg",
  },
  {
    id: 2,
    image_url: "https://m.media-amazon.com/images/I/81Hten6Gv9L._AC_UX569_.jpg",
  },
  {
    id: 3,
    image_url: "https://i.ytimg.com/vi/8rqp5Yn5Bpg/maxresdefault.jpg",
  },
];

const list_images = images.map((image) => (
  <img width="200px" height="200px" src={image.image_url} />
));

export default list_images;
