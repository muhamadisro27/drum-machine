/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import {useState} from "react";

function Pads({ pads }) {

  const [display, setDisplay] = useState("");

  window.addEventListener("keyup", (e) => {
    e.preventDefault();

    pads.map((pad) => {
      if (pad.code == e.key) {
        playSound(pad);
      }
      return;
    });
  });
  const playSound = (clip) => {
    document.getElementById(clip.code).play();
    setDisplay(clip.name)
  };

  return (
    <div className="container">
      <div className="pad-wrapper" id="drum-machine">
        {pads.map((item, index) => {
          return (
            <button
              className="drum-pad"
              id={`drum-${item.code}`}
              key={index}
              onClick={() => playSound(item)}
            >
              {item.alfabet}
              <audio src={item.source} id={item.code} className={item.code} />
            </button>
          );
        })}
      </div>
      <div className="display" id="display">
        {display}
      </div>
    </div>
  );
}

export default Pads;
