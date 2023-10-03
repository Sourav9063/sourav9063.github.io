import React from "react";
import style from "./Links.module.css";
import { useEffect } from "react";
import { useScrollPosition } from "../../provider/GlobalProvider";
import { useRef } from "react";

const linkColors = {
  1: "#FF0000",
  2: "#000000",
  3: "#4267B2",
  4: "#E1306C",
  5: "#1DA1F2",
  6: "#0A66C2",
};

export default function Links() {
  const [scrollPositionOfElement] = useScrollPosition();
  const setCalled = useRef();
  const timeoutId = useRef();
  const linkDiv = useRef();
  const linkA = useRef();
  const paths = useRef();
  const funcMouseLeave = (i) => {
    paths.current[i].animate(
      {
        strokeDashoffset:
          paths.current[i].getTotalLength() -
          paths.current[i].getTotalLength() * 1,
      },
      {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  };
  const funcMouseEnter = (i) => {
    // path.style.strokeDasharray = path.getTotalLength();
    // paths.current[i].style.strokeDashoffset = paths.current[i].getTotalLength() * 3;

    linkA.current?.style.setProperty("--green", linkColors[i]);
    paths.current[i].animate(
      {
        strokeDashoffset:
          paths.current[i].getTotalLength() -
          paths.current[i].getTotalLength() * 3,
      },
      {
        duration: 1200,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  };

  useEffect(() => {
    linkDiv.current = document.querySelector(`.${style.links}`);
    paths.current = document.querySelectorAll("ul path");
    linkA.current = document.querySelector("." + style.links);

    paths.current.forEach((path) => {
      path.style.strokeDasharray = path.getTotalLength();
      path.style.strokeDashoffset = path.getTotalLength();
    });

    return () => {};
  }, []);

  useEffect(() => {
    if (scrollPositionOfElement > 0 && scrollPositionOfElement < 310) {
      if (scrollPositionOfElement > 30 && scrollPositionOfElement < 199) {
        linkDiv.current.style.display = "block";

        setTimeout(() => {
          linkDiv.current.style.opacity = "1";
        }, 100);

        clearTimeout(timeoutId.current);
        setCalled.current = false;
      } else if (scrollPositionOfElement > 250) {
        linkDiv.current.style.opacity = "0";
        setTimeout(() => {
          linkDiv.current.style.display = "none";
        }, 1000);

        setCalled.current = true;
      } else {
        if (!setCalled.current) {
          timeoutId.current = setTimeout(() => {
            if (scrollPositionOfElement < 30 || scrollPositionOfElement > 185) {
              // linkDiv.current.style.display = "none";
              linkDiv.current.style.opacity = "0";
              setTimeout(() => {
                linkDiv.current.style.display = "none";
              }, 1000);
            }
            setCalled.current = true;
          }, 4000);
        }
        setCalled.current = true;
      }

      for (let i = 0; i < paths.current.length; i++) {
        paths.current[i].animate(
          {
            strokeDashoffset:
              paths.current[i].getTotalLength() -
              (paths.current[i].getTotalLength() * scrollPositionOfElement) /
                100,
          },
          {
            duration: 1000,
            delay: 500 * i,
            easing: "ease-in-out",
            fill: "forwards",
          }
        );

        // if (i === paths.current.length - 1) {
        //     animation.onfinish = () => {
        //         console.log("animation finished" + i + " " + scrollPositionOfElement);
        //         if (scrollPositionOfElement > 190 || scrollPositionOfElement < 10) {
        //             document.querySelector(`.${style.links}`).style.display = "none";
        //         }

        //     }
        // }
      }
    }

    return () => {};
  }, [scrollPositionOfElement]);

  return (
    <div orientation="left" className={`${style.links}`}>
      <ul>
        <li>
          <svg
            width="2"
            height="285"
            viewBox="0 0 2 285"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1.04308e-05L1 285" stroke="white" strokeWidth="2" />
          </svg>
        </li>
        <li
          onMouseEnter={() => {
            funcMouseEnter(1);
          }}
          onMouseLeave={() => {
            funcMouseLeave(1);
          }}
          onTouchStart={() => {
            funcMouseEnter(1);
          }}
          onTouchEnd={() => {
            funcMouseLeave(1);
          }}
        >
          {/* <a href="https://codepen.io/sourav9063" aria-label="Codepen" target="_blank" rel="noreferrer">
           */}
          <a
            href="mailto:sourav.ahmed5654@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="currentColor"
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.9316 3.18489L21.3099 23.5513C21.0366 24.9887 20.3241 25.3464 19.3115 24.6692L13.7931 19.8204L11.1304 22.8741C10.8357 23.2254 10.5893 23.5193 10.0214 23.5193L10.4178 16.8178L20.6455 5.79776C21.0902 5.32502 20.5491 5.06309 19.9544 5.53583L7.3104 15.0291L1.86706 12.9975C0.683025 12.5567 0.661595 11.5857 2.11351 10.9085L23.4047 1.12781C24.3905 0.687004 25.2531 1.38973 24.9316 3.18489Z"
                strokeWidth="2"
              />
            </svg>
          </a>
        </li>
        <li
          onMouseEnter={() => {
            funcMouseEnter(2);
          }}
          onMouseLeave={() => {
            funcMouseLeave(2);
          }}
          onTouchStart={() => {
            funcMouseEnter(2);
          }}
          onTouchEnd={() => {
            funcMouseLeave(2);
          }}
        >
          <a
            href="https://github.com/Sourav9063"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </li>
        <li
          onMouseEnter={() => {
            funcMouseEnter(3);
          }}
          onMouseLeave={() => {
            funcMouseLeave(3);
          }}
          onTouchStart={() => {
            funcMouseEnter(3);
          }}
          onTouchEnd={() => {
            funcMouseLeave(3);
          }}
        >
          <a
            href="https://www.facebook.com/Sourav.Ahmed63/"
            aria-label="FaceBook"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="currentColor"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4286 1H3.57143C2.88944 1 2.23539 1.27092 1.75315 1.75315C1.27092 2.23539 1 2.88944 1 3.57143V22.4286C1 23.1106 1.27092 23.7646 1.75315 24.2468C2.23539 24.7291 2.88944 25 3.57143 25H10.9241V16.8405H7.54911V13H10.9241V10.0729C10.9241 6.74339 12.9063 4.90429 15.9421 4.90429C17.3961 4.90429 18.9164 5.16357 18.9164 5.16357V8.43143H17.2413C15.5907 8.43143 15.0759 9.45571 15.0759 10.5063V13H18.7605L18.1713 16.8405H15.0759V25H22.4286C23.1106 25 23.7646 24.7291 24.2468 24.2468C24.7291 23.7646 25 23.1106 25 22.4286V3.57143C25 2.88944 24.7291 2.23539 24.2468 1.75315C23.7646 1.27092 23.1106 1 22.4286 1Z"
                strokeWidth="2"
              />
            </svg>
          </a>
        </li>
        <li
          onMouseEnter={() => {
            funcMouseEnter(4);
          }}
          onMouseLeave={() => {
            funcMouseLeave(4);
          }}
          onTouchStart={() => {
            funcMouseEnter(4);
          }}
          onTouchEnd={() => {
            funcMouseLeave(4);
          }}
        >
          <a
            href="https://www.instagram.com/__sourav_ahmed__/"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="currentColor"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.4756 7.83808L23.4756 7.83809L23.4761 7.84745C23.5864 9.79119 23.5864 15.6871 23.4761 17.6308L23.4761 17.6308L23.4758 17.6374C23.3856 19.4353 22.9858 20.8522 21.8291 22.0091L21.8278 22.0105C20.6716 23.1713 19.2564 23.5709 17.4614 23.6559L17.4614 23.6559L17.4521 23.6564C15.5088 23.7667 9.60888 23.7667 7.6656 23.6564L7.6656 23.6564L7.65901 23.656C5.86311 23.566 4.45017 23.1666 3.28721 22.0078C2.1266 20.8513 1.72705 19.4357 1.64205 17.6402L1.64209 17.6402L1.64156 17.6308C1.53126 15.6871 1.53126 9.78583 1.64156 7.84209L1.64158 7.84209L1.64191 7.8355C1.73214 6.03546 2.12754 4.62066 3.28721 3.46514C4.44975 2.30676 5.86735 1.90733 7.65636 1.82236L7.65637 1.8224L7.6656 1.82187C9.60888 1.71156 15.5088 1.71156 17.4521 1.82187V1.8219L17.4587 1.82223C19.256 1.91236 20.6725 2.3123 21.8291 3.46915L21.8305 3.47049C22.9911 4.62694 23.3906 6.04258 23.4756 7.83808ZM20.0031 23.0245L20.0066 23.0231C21.314 22.4987 22.3248 21.4892 22.8444 20.1832C23.2318 19.2095 23.349 17.7058 23.3906 16.3717C23.4214 15.3812 23.4112 14.3632 23.403 13.5597C23.3999 13.2496 23.3971 12.9715 23.3971 12.7391C23.3971 12.5068 23.3999 12.2287 23.403 11.9187C23.4112 11.1156 23.4214 10.0985 23.3906 9.10852C23.349 7.77459 23.2317 6.27178 22.8448 5.29611L22.8434 5.29259C22.3192 3.9851 21.31 2.97401 20.0042 2.45423L20.0014 2.45316C19.0295 2.06958 17.5278 1.95212 16.1938 1.90989C15.196 1.8783 14.1718 1.88812 13.3656 1.89584C13.0624 1.89875 12.79 1.90136 12.5615 1.90136C12.3292 1.90136 12.0512 1.89855 11.7413 1.89541C10.9384 1.88729 9.92149 1.87701 8.93169 1.90787C7.59806 1.94945 6.09549 2.06681 5.11993 2.45381L5.11993 2.4538L5.1164 2.45522C3.80907 2.97959 2.79825 3.98908 2.27865 5.29503L2.27864 5.29503L2.27757 5.29777C1.89412 6.26982 1.77669 7.77177 1.73446 9.10603C1.70288 10.1041 1.71269 11.1285 1.72042 11.9348C1.72332 12.2381 1.72593 12.5106 1.72593 12.7391C1.72593 12.9715 1.72312 13.2496 1.71999 13.5595C1.71187 14.3627 1.70159 15.3797 1.73244 16.3698C1.77401 17.7037 1.89135 19.2065 2.27821 20.1822L2.27963 20.1857C2.80383 21.4932 3.81306 22.5043 5.11885 23.024L5.12158 23.0251C6.09352 23.4087 7.59524 23.5261 8.9292 23.5684C9.92702 23.6 10.9512 23.5902 11.7574 23.5824C12.0606 23.5795 12.333 23.5769 12.5615 23.5769C12.7938 23.5769 13.0718 23.5797 13.3817 23.5829C14.1847 23.591 15.2015 23.6013 16.1913 23.5704C17.525 23.5288 19.0275 23.4115 20.0031 23.0245ZM7.40959 12.7391C7.40959 9.88521 9.70877 7.58584 12.5615 7.58584C15.4143 7.58584 17.7134 9.88521 17.7134 12.7391C17.7134 15.5931 15.4143 17.8924 12.5615 17.8924C9.70877 17.8924 7.40959 15.5931 7.40959 12.7391ZM7.56196 12.7391C7.56196 15.4985 9.80933 17.7396 12.5615 17.7396C15.3137 17.7396 17.5611 15.4985 17.5611 12.7391C17.5611 9.98066 15.3199 7.73869 12.5615 7.73869C9.80311 7.73869 7.56196 9.98066 7.56196 12.7391ZM19.4 6.33414C19.4 6.57758 19.2074 6.76937 18.9651 6.76937C18.7222 6.76937 18.5302 6.57709 18.5302 6.33414C18.5302 6.09362 18.7252 5.8989 18.9651 5.8989C19.205 5.8989 19.4 6.09362 19.4 6.33414Z"
                strokeWidth="2"
              />
            </svg>
          </a>
        </li>
        <li
          onMouseEnter={() => {
            funcMouseEnter(5);
          }}
          onMouseLeave={() => {
            funcMouseLeave(5);
          }}
          onTouchStart={() => {
            funcMouseEnter(5);
          }}
          onTouchEnd={() => {
            funcMouseLeave(5);
          }}
        >
          <a
            href="https://twitter.com/SouravA89184178"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Twitter</title>
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </li>
        <li
          onMouseEnter={() => {
            funcMouseEnter(6);
          }}
          onMouseLeave={() => {
            funcMouseLeave(6);
          }}
          onTouchStart={() => {
            funcMouseEnter(6);
          }}
          onTouchEnd={() => {
            funcMouseLeave(6);
          }}
        >
          <a
            href="https://www.linkedin.com/in/sourav-ahmed/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="currentColor"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2857 1H2.70893C1.76607 1 1 1.77679 1 2.73036V23.2696C1 24.2232 1.76607 25 2.70893 25H23.2857C24.2286 25 25 24.2232 25 23.2696V2.73036C25 1.77679 24.2286 1 23.2857 1ZM4.69643 21.5714V10.1179H8.25893V21.5714H4.69643ZM6.475 8.55357C5.33393 8.55357 4.4125 7.62679 4.4125 6.49107C4.4125 5.35536 5.33393 4.42857 6.475 4.42857C7.61071 4.42857 8.5375 5.35536 8.5375 6.49107C8.5375 7.63214 7.61607 8.55357 6.475 8.55357ZM21.5875 21.5714H18.0304V16C18.0304 14.6714 18.0036 12.9625 16.1821 12.9625C14.3286 12.9625 14.0446 14.4089 14.0446 15.9036V21.5714H10.4875V10.1179H13.9V11.6821H13.9482C14.425 10.7821 15.5875 9.83393 17.3179 9.83393C20.9179 9.83393 21.5875 12.2071 21.5875 15.2929V21.5714Z"
                strokeWidth="2"
              />
            </svg>
          </a>
        </li>

        <li>
          <svg
            stroke="currentColor"
            width="2"
            height="91"
            viewBox="0 0 2 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 90.5V0.5" strokeWidth="2" stroke="white" />
          </svg>
        </li>
      </ul>
    </div>
  );
}
