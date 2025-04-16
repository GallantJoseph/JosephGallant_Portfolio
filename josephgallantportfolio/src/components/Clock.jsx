import "./Clock.css";
import { useEffect, useState } from "react";

const Clock = () => {
  const CLOCK_PADDING = 64;
  const DIGITS_WIDTH = 40;

  // Range used to populate the options in select component
  const MIN_HOURS = 0;
  const MAX_HOURS = 24;

  // Default values for the minimum and maximum range
  const DEFAULT_MIN_RANGE = 9;
  const DEFAULT_MAX_RANGE = 17;

  const [minRangeValue, setMinRangeValue] = useState(DEFAULT_MIN_RANGE);
  const [maxRangeValue, setMaxRangeValue] = useState(DEFAULT_MAX_RANGE);

  // Default values for 9 and 15 range
  const [rangeXPos, setRangeXPos] = useState(444);
  const [rangeWidth, setRangeWidth] = useState(240);

  const [options, setOptions] = useState([]);

  const now = new Date();

  const [hours, setHours] = useState(now.getHours() + now.getMinutes() / 60);
  const [minutes, setMinutes] = useState(now.getMinutes());
  const [seconds, setSeconds] = useState(now.getSeconds());

  // Time left in minutes
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);

  useEffect(() => {
    // Populate the options array that will be used for the select components
    let opts = [];

    for (let i = MIN_HOURS; i <= MAX_HOURS; i++) {
      opts.push(i.toString());
    }

    setOptions(opts);

    // Update the time
    setInterval(() => {
      const currTime = new Date();

      setSeconds(currTime.getSeconds());
      setMinutes(currTime.getMinutes());
      setHours(currTime.getHours() + currTime.getMinutes() / 60);

      // If the time is under the minimum range, we only need to calculate
      // the difference between the maximum and minimum range
      if (
        currTime.getHours() < minRangeValue ||
        (currTime.getHours() == maxRangeValue && currTime.getMinutes() == 0)
      ) {
        setHoursLeft(maxRangeValue - minRangeValue);
        setMinutesLeft(0);
      } else {
        if (
          currTime.getHours() < maxRangeValue ||
          (currTime.getHours() === 0 && currTime.getMinutes() > 0)
        ) {
          const minLeft =
            maxRangeValue * 60 -
            (currTime.getHours() * 60 + currTime.getMinutes());

          setHoursLeft(parseInt(minLeft / 60));
          setMinutesLeft(minLeft % 60);
        } else {
          setHoursLeft(0);
          setMinutesLeft(0);
        }
      }
    }, 1000);
  }, []);

  // Update when the minRange or maxRange change
  useEffect(() => {
    resizeRange();
  }, [minRangeValue, maxRangeValue]);

  const handleMinRangeChange = (value) => {
    if (parseInt(value) < maxRangeValue) {
      setMinRangeValue(value);
    } else {
      alert(
        "The value must be less than the max value. Please select a different value."
      );
    }
  };

  const handleMaxRangeChange = (value) => {
    if (parseInt(value) > minRangeValue) {
      setMaxRangeValue(value);
    } else {
      alert(
        "The value must be greater than the min value. Please select a different value."
      );
    }
  };

  const resizeRange = () => {
    let diff = Math.abs(maxRangeValue - minRangeValue);

    setRangeWidth(diff * DIGITS_WIDTH);
    setRangeXPos(
      CLOCK_PADDING + DIGITS_WIDTH / 2 + DIGITS_WIDTH * minRangeValue
    );
  };

  return (
    <section id="clock-section">
      <h2>Linear Clock</h2>
      <div id="linear-clock">
        <div id="clock-numbers">
          <ul>
            <li className="large-digit">0</li>
            <li>|</li>
            <li>|</li>
            <li className="small-digit">3</li>
            <li>|</li>
            <li>|</li>
            <li className="large-digit">6</li>
            <li>|</li>
            <li>|</li>
            <li className="small-digit">9</li>
            <li>|</li>
            <li>|</li>
            <li className="large-digit">12</li>
            <li>|</li>
            <li>|</li>
            <li className="small-digit">15</li>
            <li>|</li>
            <li>|</li>
            <li className="large-digit">18</li>
            <li>|</li>
            <li>|</li>
            <li className="small-digit">21</li>
            <li>|</li>
            <li>|</li>
            <li className="large-digit">24</li>
          </ul>
        </div>
        <div
          id="clock-range"
          style={{ width: rangeWidth, left: rangeXPos }}
        ></div>
        <div id="clock-hand" style={{ left: hours * DIGITS_WIDTH }}></div>
        <div id="clock-seconds">
          <span id="seconds">{seconds}</span>
        </div>
        <div id="time-left">
          <h3>Active Hours Remaining</h3>
          <span className={hoursLeft < 1 ? "red" : ""}>
            {hoursLeft.toFixed(0)} Hour(s), {minutesLeft.toFixed(0)} Minute(s)
          </span>
        </div>
      </div>
      <div id="clock-min-max">
        <div id="min-range">
          <label htmlFor="minRangeSelect">Minimum Range</label>
          <br />
          <select
            name="minRangeSelect"
            id="minRangeSelect"
            onChange={(e) => {
              handleMinRangeChange(e.target.value);
            }}
            value={minRangeValue}
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div id="max-range">
          <label htmlFor="maxRangeSelect">Maximum Range</label>
          <br />
          <select
            name="maxRangeSelect"
            id="maxRangeSelect"
            onChange={(e) => {
              handleMaxRangeChange(e.target.value);
            }}
            value={maxRangeValue}
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};
export default Clock;
