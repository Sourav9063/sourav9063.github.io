import React, { useState } from "react";
import style from "./EmailSection.module.css";
import SendButton from "../button/send/SendButton";
import GlassDiv from "../glassDiv/GlassDiv";
export default function EmailSection() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [btnTxt, setBtnTxt] = useState("SEND");

  return (
    <GlassDiv className={style["glass"]}>
      <form
        className={`${style.emailSection}`}
        onSubmit={async (e) => {
          e.preventDefault();
          // console.log(email, subject, body);
          try {
            setBtnTxt("SENDING...");
            const res = await fetch(
              "https://twitterbysourav.vercel.app/api/email-sender/from-portfolio",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: email || "email@gmail.com",
                  username: "portfolio",
                  emailSubject: subject,
                  emailBody: body,
                }),
              }
            );
            if (res.ok) {
              setBtnTxt("SENT");
            }
          } catch (err) {
            setBtnTxt("ERROR");
          }
        }}
      >
        <h2 className={style["h2"]}>Email me your thoughts</h2>
        <input
          type="email"
          name="email"
          placeholder="Your Email (Optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          name="body"
          id=""
          cols="30"
          rows="10"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <SendButton type="submit" btnTxt={btnTxt}></SendButton>
      </form>
    </GlassDiv>
  );
}
