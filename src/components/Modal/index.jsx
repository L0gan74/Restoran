import React from "react";
import { Link } from "react-router-dom";

import close from "../../assets/close.svg";
import smiley from "../../assets/smiley.svg";

function Modal() {

  return (
    <div className="modalokn-full">
      <div className="modalokn">
        <div className="modalokn-close">
          <Link to="/">
            <button className="close">
              <img src={close} alt="" />
            </button>
          </Link>
        </div>
        <div className="modalokn-main">
          <img src={smiley} alt="" />
          <h1>коризна пустая</h1>
          <Link to="/">
            <button>Посмотреть меню</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
