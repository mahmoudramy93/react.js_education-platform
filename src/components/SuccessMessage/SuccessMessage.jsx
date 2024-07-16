import React, { useState } from "react";
import "./success_message.css";
import { Button } from "react-bootstrap";

const SuccessMessage = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="success-message">
        <h2>{message}</h2>
        <Button variant="secondary" onClick={handleClose}>
          Ok
        </Button>
      </div>
    )
  );
};

export default SuccessMessage;
