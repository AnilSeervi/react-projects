import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";
import Slider from "@material-ui/core/Slider";
import { Box, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  margin: {
    marginLeft: "1rem",
  },
});

export const Chips = (props) => {
  const { sliderValue, setSliderValue, anchorEl, setAnchorEl, label } = props;
  const classes = useStyles();
  const handleChipClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleChipClose = () => {
    setAnchorEl(null);
  };
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  const handleInputChange = (event) => {
    setSliderValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (sliderValue < 0) {
      setSliderValue(0);
    } else if (sliderValue > 100) {
      setSliderValue(100);
    }
  };
  return (
    <Box>
      <Chip
        aria-controls={`${label} menu`}
        aria-haspopup="true"
        variant="outlined"
        avatar={<Avatar>{sliderValue}</Avatar>}
        label={label}
        clickable
        color="secondary"
        onClick={handleChipClick}
      />
      <Menu
        id={`${label} menu`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleChipClose}
        PaperProps={{
          style: {
            width: "30ch",
          },
        }}
      >
        <MenuItem>
          <Slider
            value={typeof sliderValue === "number" ? sliderValue : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={0}
            max={100}
            step={5}
          />
          <Input
            className={classes.margin}
            value={sliderValue}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </MenuItem>
      </Menu>
    </Box>
  );
};
