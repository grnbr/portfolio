"use client";

import emailjs from "@emailjs/browser";
import { type getDictionary } from "@/get-dictionary";
import styles from "./form.module.scss";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Button } from "../../button";

const Form = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["contact"]["form"];
}) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm("contact_service", "contact_form", formRef.current || "", {
        publicKey: "UmUeC72TucaeZmWyv",
      })
      .then(
        () => {
          console.log("Success!");
          setEmail("");
          setName("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log("Failed...", error.text);
        },
      );
  };

  const callbacks = {
    handleChangeEmail: (e: ChangeEvent<HTMLInputElement>) =>
      setEmail(e.target.value),
    handleChangeName: (e: ChangeEvent<HTMLInputElement>) =>
      setName(e.target.value),
    handleChangeSubject: (e: ChangeEvent<HTMLInputElement>) =>
      setSubject(e.target.value),
    handleChangeMessage: (e: ChangeEvent<HTMLTextAreaElement>) =>
      setMessage(e.target.value),
  };

  return (
    <section className={styles["page-container"]}>
      <form ref={formRef} className={styles["form"]} onSubmit={sendEmail}>
        <div className={styles["title-wrapper"]}>
          <div className={styles["dots"]}>
            <div className={styles["red-dot"]} />
            <div className={styles["orange-dot"]} />
            <div className={styles["green-dot"]} />
          </div>
          <h4>{dictionary.title}</h4>
        </div>

        <div className={styles["main-window"]}>
          <div className={styles["inputs-wrapper"]}>
            <div className={styles["input-wrapper"]}>
              <label className={styles["label"]} htmlFor="user_email">
                {dictionary.email.label}
              </label>
              <input
                className={styles["input"]}
                type="email"
                name="user_email"
                id="email"
                value={email}
                required
                onChange={callbacks.handleChangeEmail}
                placeholder={dictionary.email.placeholder}
              />
            </div>

            <div className={styles["input-wrapper"]}>
              <label className={styles["label"]} htmlFor="user_name">
                {dictionary.name.label}
              </label>
              <input
                className={styles["input"]}
                type="text"
                name="user_name"
                id="name"
                value={name}
                onChange={callbacks.handleChangeName}
                placeholder={dictionary.name.placeholder}
              />
            </div>

            <div className={styles["input-wrapper"]}>
              <label className={styles["label"]} htmlFor="subject">
                {dictionary.subject.label}
              </label>
              <input
                className={styles["input"]}
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={callbacks.handleChangeSubject}
                placeholder={dictionary.subject.placeholder}
              />
            </div>
          </div>

          <hr className={styles.underline} />

          <div className={styles["textarea-wrapper"]}>
            <textarea
              id="message"
              name="message"
              value={message}
              required
              onChange={callbacks.handleChangeMessage}
              className={styles["textarea"]}
              placeholder={dictionary["textarea-placeholder"]}
            />
          </div>

          <div className={styles["btn-wrapper"]}>
            <Button disabled={!email || !message} type="submit">
              {dictionary["send-btn"]}
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
