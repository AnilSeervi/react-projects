import { useState } from "react";
import { Chips } from "./components/Chips";
import { Timer } from "./components/Timer";
export const Main = ({ classes }) => {
  const [focusAnchorEl, setFocusAnchorEl] = useState(null);
  const [shortBreakAnchorEl, setShortBreakAnchorEl] = useState(null);
  const [longBreakAnchorEl, setLongBreakAnchorEl] = useState(null);
  const [focusTime, setFocusTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);

  return (
    <>
      <div className={classes}>
        <Chips
          anchorEl={focusAnchorEl}
          setAnchorEl={setFocusAnchorEl}
          sliderValue={focusTime}
          setSliderValue={setFocusTime}
          label="Focus"
        />
        <Chips
          anchorEl={shortBreakAnchorEl}
          setAnchorEl={setShortBreakAnchorEl}
          sliderValue={shortBreakTime}
          setSliderValue={setShortBreakTime}
          label="Short-Break"
        />
        <Chips
          anchorEl={longBreakAnchorEl}
          setAnchorEl={setLongBreakAnchorEl}
          sliderValue={longBreakTime}
          setSliderValue={setLongBreakTime}
          label="Long-Break"
        />
      </div>
      <div id="timer">
        <Timer
          focusTime={focusTime}
          shortBreakTime={shortBreakTime}
          longBreakTime={longBreakTime}
        />
      </div>
    </>
  );
};
