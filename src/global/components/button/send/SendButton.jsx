import React from "react";
import style from "./SendButton.module.css";

export default function SendButton({
  onClick,
  type = "button",
  btnTxt = "SEND",
}) {
  return (
    <>
      <button className={style.btn} type={type}>
        <strong>{btnTxt}</strong>
        <div className={style["glow"]}>
          <div className={style["circle"]}></div>
          <div className={style["circle"]}></div>
        </div>
      </button>
      <div className={style["container-stars"]}>
        <div className={style["stars"]}></div>
      </div>
      {/* <div
        className={`${style["container-stars"]} ${style["container-stars-2"]}`}
      >
        <div className={style["stars"]}></div>
      </div> */}
    </>
  );
}
