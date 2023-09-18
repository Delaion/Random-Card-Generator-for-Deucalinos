/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const icons = ["♥️", "♦️", "♠️", "♣️"];
const card = document.getElementById("card");
const numberElement = document.getElementById("value");
const iconElement = document.getElementById("icon");
const randomIndex = Math.floor(Math.random() * icons.length);
const randomIndex2 = Math.floor(Math.random() * numbers.length);
iconElement.textContent = icons[randomIndex];
numberElement.textContent = numbers[randomIndex2];
