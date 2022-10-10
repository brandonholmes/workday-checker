import warning from "../img/warning.png";
import sad from "../img/sad.png";
import happy from "../img/happy.png";

export default function Details({ result, day, month, year }) {
  return result === 0 ? (
    <div>
      <p>
        Sorry, {month}/{day}/{year} is a workday.
      </p>
      <img src={sad} alt="sad face" />
    </div>
  ) : result === 1 ? (
    <div>
      <p>
        Great news, {month}/{day}/{year} is not a workday!!
      </p>
      <img src={happy} alt="happy face" />
    </div>
  ) : day === undefined && month === undefined && year === undefined ? (
    <div></div>
  ) : day === "" || month === "" || year === "" ? (
    <div>
      <p>All fields are required</p>
      <img src={warning} alt="warning icon" />
    </div>
  ) : result === "Invalid Year" ? (
    <div>
      <p>Sorry, {year} is an invalid year.</p>
      <img src={warning} alt="warning icon" />
    </div>
  ) : (
    <div>
      <p>Sorry, that was invalid input. Please try again.</p>
      <img src={warning} alt="warning icon" />
    </div>
  );
}
