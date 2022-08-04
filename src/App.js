import { useState } from "react";

import "./styles.css";

export default function App() {
  const [clickedPad, setClickedPad] = useState();

  const keyDownHandler = (e) => {
    const validKeys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
    if (validKeys.some((key) => e.key === key)) {
      const buttonEl = document.getElementById(e.key.toUpperCase());
      buttonEl.children[0].play();
      setClickedPad(buttonEl.getAttribute("data-sample"));
    }
  };

  const padClickHandler = (e) => {
    e.target.children[0].play();
    setClickedPad(e.target.getAttribute("data-sample"));
  };

  return (
    <div className="App" tabIndex={0} onKeyDown={keyDownHandler}>
      <div id="drum-machine">
        <div id="buttons">
          <button
            id="Q"
            className="drum-pad"
            data-sample="snare-1"
            onClick={padClickHandler}
          >
            Q
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"></audio>
          </button>
          <button
            id="W"
            className="drum-pad"
            data-sample="stab-1"
            onClick={padClickHandler}
          >
            W
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
          </button>
          <button
            id="E"
            className="drum-pad"
            data-sample="stab-2"
            onClick={padClickHandler}
          >
            E
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
          </button>
          <button
            id="A"
            className="drum-pad"
            data-sample="hi-hat-closed"
            onClick={padClickHandler}
          >
            A
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"></audio>
          </button>
          <button
            id="S"
            className="drum-pad"
            data-sample="clap"
            onClick={padClickHandler}
          >
            S
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
          </button>
          <button
            id="D"
            className="drum-pad"
            data-sample="hi-hat-open"
            onClick={padClickHandler}
          >
            D
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
          </button>
          <button
            id="Z"
            className="drum-pad"
            data-sample="bass-drop"
            onClick={padClickHandler}
          >
            Z
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
          </button>
          <button
            id="X"
            className="drum-pad"
            data-sample="kick"
            onClick={padClickHandler}
          >
            X
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
          </button>
          <button
            id="C"
            className="drum-pad"
            data-sample="hi-hat-open"
            onClick={padClickHandler}
          >
            C
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"></audio>
          </button>
        </div>
        <div id="controls">
          <div id="brand">DRUMZ 1000</div>
          <div id="display">{clickedPad}</div>
        </div>
      </div>
    </div>
  );
}
