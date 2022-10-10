import { useState } from "react";

export default function Entry({ setDay, setMonth, setYear }) {
  const [monthContent, setMonthContent] = useState("");
  const [yearContent, setYearContent] = useState("");
  const [dayContent, setDayContent] = useState("");

  function submit(e) {
    e.preventDefault();
    setDay(dayContent);
    setMonth(monthContent);
    setYear(yearContent);
    setDayContent("");
    setMonthContent("");
    setYearContent("");
  }

  function updateYear(e) {
    setYearContent(e.target.value);
  }

  function updateMonth(e) {
    setMonthContent(e.target.value);
  }

  function updateDay(e) {
    setDayContent(e.target.value);
  }

  return (
    <form onSubmit={submit}>
      <p>
        <input
          value={monthContent}
          onChange={updateMonth}
          placeholder="Month (1 - 12)"
        ></input>
      </p>
      <p>
        <input
          value={dayContent}
          onChange={updateDay}
          placeholder="Day (1 - 31)"
        ></input>
      </p>
      <p>
        <input
          value={yearContent}
          onChange={updateYear}
          placeholder="Year (2020 - 2022)"
        ></input>
      </p>
      <p>
        <input
          id="button"
          type="button"
          value="Check for Workday"
          onClick={submit}
        />
      </p>
    </form>
  );
}
