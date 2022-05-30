import "./styles.css";
import Banner from "./components/Banner";

//images array
const images = [
  {
    image: require("./images/agilis1.jpg")
  },
  {
    image: require("./images/agilis2.jpg")
  },
  {
    image: require("./images/agilis3.jpg")
  },
];

export default function App() {
  return <Banner banners={images} />;
}
