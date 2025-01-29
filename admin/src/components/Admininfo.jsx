import React from "react";
import { useState } from "react";
import "../css/admin.css";
const Admininfo = () => {
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === "") {
      setSubmittedMessage("Please enter a valid issue before submitting.");
    } else {
      setSubmittedMessage(`${message}`);
      setMessage("");
    }
  };

  return (
    <div className="main">
      <div className="sec">
        <div className="head">
          <img
            src="https://everestglobalhr.com.np/admin/uploads/teams/d3588-untitled-2.png"
            alt="adminlogo"
            height="50px"
          />
          <p className="header">Santosh Thapa</p>
        </div>
        <div className="headPart">
          <p className="green">&#x2022; </p>
          <p className="position">Admin</p>
        </div>
      </div>
      <h4 className="white">Your admin is 24/7 online for your support!</h4>
      <h4 className="white">Tell me, How can I help You?</h4>
      <br />
      <br />

      <p
        className="outputMessage"
        id="output"
        style={{ visibility: submittedMessage === "" ? "hidden" : "visible" }}
      >
        {submittedMessage}
      </p>
      <textarea
        className="message"
        id="message-support"
        value={message}
        placeholder="Enter Your Issue on Message"
        onChange={handleInputChange}
      />

      <button onClick={handleSendMessage} type="submit" id="sendMessageBtn">
        Send Message
      </button>
    </div>
  );
};

export default Admininfo;
