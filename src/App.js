import { useState, useEffect } from "react";
import "./styles.css";
import Entry from "./Entry.js";
import Details from "./Details.js";

export default function App() {
  const [result, setResult] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [year, setYear] = useState();

  useEffect(() => {
    const y = encodeURIComponent(year);
    const d = encodeURIComponent(day);
    const m = encodeURIComponent(month);
    if (y === "2020" || y === "2021" || y === "2022") {
      const url = `https://isdayoff.ru/api/getdata?year=${y}&month=${m}&day=${d}&cc=us`;
      console.log(url);
      fetch(url)
        .then((r) => r.json())
        .then((r) => setResult(r))
        .then((r) => console.log(r))
        .catch((e) => setResult(e));
    } else {
      setResult("Invalid Year");
    }
  }, [day, month, year]);

  return (
    <div id="content">
      <header>
        <h1>Workday Checker</h1>
      </header>
      <section>
        <Entry setDay={setDay} setMonth={setMonth} setYear={setYear} />
        <Details result={result} day={day} month={month} year={year} />
      </section>
    </div>
  );
}
