/* eslint-disable */
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  document.querySelector("#buttonEx").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Coding this using Gitpod has been awful...");
};

let generateExcuse = () => {
  let who = [
    "A guy with a lifevest and a flying skate",
    "An old gremling who talked anastrohpes",
    "A 12yo boy with a yellow rat",
    "A samurai with curly white hair",
    "Some hobbits carrying a ring",
    "A pirate with a straw hat",
    "A balck dressed orphan who loves bats",
    "An angry canadian"
  ];
  let action = [
    "ate",
    "broke",
    "ran over",
    "froze",
    "burned",
    "hide",
    "took",
    "cut",
    "trew",
    "blasted"
  ];
  let what = [
    "my keys",
    "my laptop",
    "my phone",
    "the car",
    "the window",
    "the kitchen",
    "my shoes",
    "the internet"
  ];
  let when = [
    "when I was leaving",
    "after I woke up",
    "during breakfast",
    "while I was sleeping"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
