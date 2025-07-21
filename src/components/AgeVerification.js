// components/AgeVerification.js
import { useEffect, useState } from "react";

export default function AgeVerification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified");
    if (!verified) setShow(true);
  }, []);

  const verify = () => {
    localStorage.setItem("ageVerified", true);
    setShow(false);
  };

  return show ? (
    <div className="age-modal">
      <div className="age-modal-content">
        <h2>Are you 21 or older?</h2>
        <button onClick={verify}>Yes, I am</button>
      </div>
    </div>
  ) : null;
}
