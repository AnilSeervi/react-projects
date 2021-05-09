import { Button, LinearProgress, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useEffect, useRef, useState } from "react";
const useStyles = makeStyles({
  bg: {
    backgroundColor: "#FF4E4D",
  },
  color: {
    color: "#ffffff",
  },
  width: {
    width: "100%",
  },
});

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const Timer = ({ focusTime, shortBreakTime, longBreakTime }) => {
  const classes = useStyles();
  const [sessionLen, setSessionLen] = useState(() => focusTime * 60);
  const [sessionType, setSessionType] = useState("Focus");
  const [sessionNo, setSessionNo] = useState(1);
  const [minutes, setMinutes] = useState(() => Math.floor(sessionLen / 60));
  const [seconds, setSeconds] = useState(() => sessionLen % 60);
  const [intervalId, setIntervalId] = useState(null);
  const isSessionStarted = intervalId !== null;

  const handleStartStop = () => {
    // if (intervalId) {
    // clearInterval(intervalId);
    // setIntervalId(null);
    // } else {
    useInterval(() => {
      // const sessionInterval = setInterval(() => {
      if (sessionLen > 0) {
        setSessionLen((prevSesLen) => prevSesLen - 1);
      } else {
        console.log(sessionNo);
        console.log(sessionType);
        if (sessionNo < 4) {
          if (sessionType === "Focus") {
            setSessionType("Short-Break");
            setSessionLen(() => shortBreakTime * 60);
          } else if (sessionType === "Short-Break") {
            setSessionType("Focus");
            setSessionLen(() => focusTime * 60);
          }
        } else if (sessionNo === 4) {
          setSessionType("Long-Break");
          setSessionLen(() => longBreakTime * 60);
        } else {
          // clearInterval(sessionInterval);
        }
        // }
        // }, 100);
      }
    }, 1000);
    // setIntervalId(sessionInterval);
  };

  useEffect(() => {
    setSessionLen(() => focusTime * 60);
  }, [focusTime]);
  useEffect(() => {
    setMinutes(() => Math.floor(sessionLen / 60));
    setSeconds(() => sessionLen % 60);
  }, [sessionLen]);

  return (
    <>
      <LinearProgress
        variant="determinate"
        classes={{ colorPrimary: classes.bg }}
        value={70}
        className={classes.width}
      />
      <Typography
        variant="h1"
        align="center"
        color="primary"
        classes={{ colorPrimary: classes.color }}
      >
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </Typography>
      <Typography>{sessionType}</Typography>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        onClick={handleStartStop}
      >
        {isSessionStarted ? "Stop" : "Start"}
      </Button>
    </>
  );
};
