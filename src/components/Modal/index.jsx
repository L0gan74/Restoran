import React from "react";

import close from "../../assets/close.svg";
import smiley from "../../assets/smiley.svg";

function Modal({ setModal }) {
  const poput = React.useRef();

  React.useEffect(() => {
    document.body.addEventListener('click', (event) => {
      if (event.path.includes(poput.current)) {
        setModal(false)
      }
    })
  }, [])

  return (
    <div ref={poput} className="modalokn-full">
      <div className="modalokn">
        <div className="modalokn-close">
          <button className="close" onClick={() => setModal(false)}>
            <img src={close} alt="" />
          </button>
        </div>
        <div className="modalokn-main">
          <img src={smiley} alt="" />
          <h1>коризна пустая</h1>
          <button>Посмотреть меню</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
