import pData from "../public/data/pData.json";
import "./peopleStyles.css";
import { useEffect, useState} from "react";

import { ReactComponent as Close } from "../public/media/icons/close.svg";

const tryRequire = (path) => {
  try {
    return require(`../public/media/people/${path}`);
  } catch (err) {
    return require("../public/media/people/default.png");
  }
};
export default function People() {
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState(pData.reverse());

  const handleButtonClick = (data) => {
    if (!show) {
      setSelectedData(data);
      setShow(true);
      console.log("data set to false");
      console.log("show set to true");
    }
  };

  const closeCard = () => {
    setShow(false);
    console.log("show set to false");
  };
  useEffect(()=>{
    document.title = "Personas"
  }
  );
  return (
    <div className="People">
      {pData.map((data, index) => (
        <div className={show ? "blur" : "PersonCard"}>
          <img
            key={index}
            src={tryRequire(data.img)}
            alt={index}
            className="Image"
          />
          <p id="name">{data.name}</p>
          <p id="studies">{data.studies}</p>
          <p id="position">{data.position}</p>
          <p
            id={show ? "showMore-Disabled" : "showMore"}
            onClick={() => handleButtonClick(data)}
          >
            ver mas...{" "}
          </p>
        </div>
      ))}
      <div className={show ? "VerbiagePersonCard" : "hidden"}>
        <Close id="close" onClick={closeCard} />
        <div id="vpc-w-1">
          <img
            src={tryRequire(selectedData.img)}
            alt="selectedImage"
            className="Image"
          />
          <div id="vpc-w-2">
            <p id="name">{selectedData.name}</p>
            <p id="studies">{selectedData.studies}</p>
            <p id="position">{selectedData.position}</p>
          </div>
        </div>
        <p id="desc">{selectedData.desc}</p>
        <div id="vpc-w-1">
          <p id="mail">{selectedData.contact_mail}</p>
          <p id="phone">{selectedData.contact_phone}</p>
        </div>
      </div>
    </div>
  );
}
