import React, { useState, useEffect } from "react";
import style from "./stars.module.css";

let ratio = window.innerHeight / window.innerWidth;

const getRandomStarPlacement = (starsCount) => {
  const stars = [];
  for (let i = 0; i < starsCount; i++) {
    const star = {
      top: Math.floor(Math.random() * 100),
      left: Math.floor(Math.random() * 100),
      opacity: Math.random() * 0.6 + 0.2,
      size: Math.floor(Math.random() * 16) + 4,
      backgroundColor: `hsl(${
        Math.floor(Math.random() * 100) + 240
      }, 100%, 50%)`,
      animationDelay: Math.floor(Math.random() * 15) + "s",
      animationDuration: Math.floor(Math.random() * 5) + 5 + "s",
    };
    stars.push(star);
  }
  return stars;
};

const distance = (x1, y1, x2, y2) => {
  return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
};
const move = (x1, y1, x2, y2, r) => {
  // const dist = distance(x1, y1, x2, y2);
  const angle = Math.atan2(y1 - y2, x1 - x2);
  const newX = x1 - Math.cos(angle) * r;
  const newY = y1 - Math.sin(angle) * r;

  return {
    newX,
    newY,
  };
};

let stars = [];
stars = getRandomStarPlacement(ratio > 1 ? 300 : 375);
// let ratio = window.innerHeight / window.innerWidth;
// let ratio = 1;
const percent = ratio > 1 ? 12 : 15;
const distConst = Math.max(percent * ratio * (percent * ratio), 255);

console.log("run");

const listOfWords = [
  "I've a Great Attention Span",
  "I'm Attentive To Detail",
  "I'm a Team Player",
  "I'm Communicative",
  "I'm a Creative Thinker",
  "I'm Humble",
  "I'm Eager to Learn",
  "I'm Adaptive",
  "I'm a Quick Learner",
];
let change = true;
export default function Stars() {
  // const [stars, setStars] = useState(getRandomStarPlacement(500))
  const [word, setWord] = useState(
    listOfWords[Math.floor(Math.random() * listOfWords.length)]
  );

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  return (
    <div className={`${style.beforeZ} text_not_selectable`}>
      <div
        className={style.body}
        onMouseMove={(e) => {
          const rect = e.target.getBoundingClientRect();
          // console.log(e)
          let xtmp = e.clientX - rect.left;
          let ytmp = e.clientY - rect.top;
          xtmp = (xtmp / rect.width) * 100;
          ytmp = (ytmp / rect.height) * 100;
          if (Math.abs(xtmp - x) > 1 || Math.abs(ytmp - y) > 1) {
            setX(xtmp);
            setY(ytmp);
            // console.log({ x, y })
          }
          // console.log({ change })
          if ((x <= 20 || x >= 80) && change) {
            setWord(
              listOfWords[Math.floor(Math.random() * listOfWords.length)]
            );
            change = false;
            // console.log(change)
          } else if (x > 20 && x < 80) {
            change = true;
          }
        }}
        onTouchMove={(e) => {
          const rect = e.target.getBoundingClientRect();
          // console.log(e)
          let xtmp = e.touches[0].clientX - rect.left;
          let ytmp = e.touches[0].clientY - rect.top;
          xtmp = (xtmp / rect.width) * 100;
          ytmp = (ytmp / rect.height) * 100;
          if (Math.abs(xtmp - x) > 1 || Math.abs(ytmp - y) > 1) {
            setX(xtmp);
            setY(ytmp);
            // console.log({ x, y })
          }
          if ((x <= 20 || x >= 80) && change) {
            setWord(
              listOfWords[Math.floor(Math.random() * listOfWords.length)]
            );
            change = false;
            // console.log(change)
          } else if (x > 20 && x < 80) {
            change = true;
          }
        }}
        onClick={() =>
          // setStars(getRandomStarPlacement(500))

          {
            setWord(
              listOfWords[Math.floor(Math.random() * listOfWords.length)]
            );
          }
        }
      >
        {/* <div className={style.debug}>
                        <p>x={x}</p>
                        <p>y={y}</p>
                        <p>ratio:{change ? "t" : "f"}</p>
                    </div> */}
        {stars.map((star, index) => {
          return (
            <div
              key={index}
              className={style.star}
              style={{
                "--opacity": star.opacity,
                backgroundColor: star.backgroundColor,
                // top: star.top + '%',
                // left: star.left + '%',
                left:
                  distance(x, y, star.left, star.top) <
                  (ratio <= 1 ? distConst * ratio : distConst)
                    ? move(
                        x,
                        y,
                        star.left,
                        star.top,
                        ratio <= 1
                          ? Math.sqrt(distConst) * ratio
                          : Math.sqrt(distConst)
                      ).newX + "%"
                    : star.left + "%",
                top:
                  distance(x, y, star.left, star.top) <
                  (ratio >= 1 ? distConst / ratio : distConst)
                    ? move(
                        x,
                        y,
                        star.left,
                        star.top,
                        ratio >= 1
                          ? Math.sqrt(distConst) / ratio
                          : Math.sqrt(distConst)
                      ).newY + "%"
                    : star.top + "%",
                // boxShadow: `0px 0px 5px ${star.backgroundColor}`,
                // opacity: 0,
                opacity:
                  distance(x, y, star.left, star.top) <
                  (ratio >= 1 ? distConst / ratio : distConst * ratio)
                    ? 1
                    : star.opacity,
                animation:
                  distance(x, y, star.left, star.top) <
                  (ratio >= 1 ? distConst / ratio : distConst)
                    ? "none"
                    : `${style.starAni} ${star.animationDuration} ease ${star.animationDelay} infinite alternate`,
                // top: (star.top - y) * (star.top - y) + (star.left - x) * (star.left - x) < 100 ? x + "%" : star.top + '%',
                // left: (star.top - y) * (star.top - y) + (star.left - x) * (star.left - x) < 100 ? y + "%" : star.left + '%',
                // opacity: star.opacity,
                width: star.size + "px",
                height: star.size + "px",
                // backgroundColor: star.backgroundColor,
                // animationDelay: star.animationDelay,
                // animationDuration: star.animationDuration,
                // transform x and y to get close to mouse position using
                // translateX and translateY
                // only those are in 20 % range of the mouse
                // transform: Math.abs(star.top - y) < 5 && Math.abs(star.left - y) < 5 ? `translateX(${star.left + (star.left - x)}px) translateY(${star.top + (star.top - x)}px)` : ``,
                // transform: distance(star.top, star.left, y, x) < 144 ? `translateX(${star.left + move(x, y, star.left, star.top, 12).newX}%) translateY(${star.top + move(x, y, star.left, star.top, 12).newY}%)` : ``,
                // transform: (star.top - y) * (star.top - y) + (star.left - x) * (star.left - x) < 100 ? `translateX(${x}%) translateY(${y}%)` : ``,
                // opacity: (star.top - y) * (star.top - y) + (star.left - x) * (star.left - x) < 100 ? "yellow" : "white"
              }}
            />
          );
        })}
      </div>

      <div className={style.word}>
        <div>{word}</div>
      </div>
      <div
        className={style.light}
        style={{ "--x": x + "%", "--y": y + "%" }}
      ></div>
    </div>
  );
}

// top: (star.top - y) * (star.top - y) + (star.left - x) * (star.left - x) < 100 ? star.top + ((star.top - x) / Math.abs((star.top - x))) * 1 + "%" : star.top + '%',
//     left: (star.top - y) * (star.top - y) + (star.left - x) * (star.left - x) < 100 ? star.left + ((star.left - y) / Math.abs((star.left - y))) * 1 + "%" : star.left + '%',
