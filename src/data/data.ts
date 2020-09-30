import { Product } from "./../models/product";

import img1 from "../images/product-1.jpeg";
import img2 from "../images/product-2.jpeg";
import img3 from "../images/product-3.jpeg";
import img4 from "../images/product-4.jpeg";
import img5 from "../images/product-5.jpeg";
import img6 from "../images/product-6.jpeg";
import img7 from "../images/product-7.jpeg";
import img8 from "../images/product-8.jpeg";

const products: Product[] = [
  {
    id: "1",
    title: "queen panel bed",
    price: 10.99,
    image: img1
  },
  {
    id: "2",
    title: "king panel bed",
    price: 12.99,
    image: img2
  },
  {
    id: "3",
    title: "single panel bed",
    price: 12.99,
    image: img3
  },
  {
    id: "4",
    title: "twin panel bed",
    price: 22.99,
    image: img4
  },
  {
    id: "5",
    title: "fridge",
    price: 88.99,
    image: img5
  },
  {
    id: "6",
    title: "dresser",
    price: 32.99,
    image: img6
  },
  {
    id: "7",
    title: "couch",
    price: 45.99,
    image: img7
  },
  {
    id: "8",
    title: "table",
    price: 33.99,
    image: img8
  }
];

export default products;
