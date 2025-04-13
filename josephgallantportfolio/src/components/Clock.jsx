import "./Clock.css";

const Clock = () => {
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
        <div id="clock-range"></div>
        <div id="clock-hand"></div>
      </div>
    </section>
  );
};
export default Clock;
