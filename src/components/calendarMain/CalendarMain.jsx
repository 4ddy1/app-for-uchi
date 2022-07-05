import "./calendarMain.css";

const defaultSelectors = {
  years: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  weekDayNames: ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
};

const CalendarMain = () => {
  const { years, monthNames, weekDayNames } = defaultSelectors;
  const monthData = [
    [
      "",
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
    ],
  ];
  const matrix = {
    blocks: [...Array.from(Array(24).keys())].map((i) => [...Array(8).keys()]),
  };
  const changeWeek = (x) => {};
  return (
    <div className="main">
      <div className="calendarSelector">
        <table>
          <thead>
            <tr className="dayName">
              {weekDayNames.map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
            <tr className="dayNumber">
              {monthData.map((week, index) => (
                <th key={index} className="week">
                  {week.map((date, index) =>
                    date ? (
                      <div key={index}>{date.getDate()} </div>
                    ) : (
                      <div key={index} />
                    )
                  )}
                </th>
              ))}
            </tr>
            <tr className="slider">
              <th>
                <button>{"<"}</button>
              </th>
              <th className="selects">
                <select id="month">
                  {monthNames.map((name, index) => (
                    <option key={name} value={index}>
                      {name}
                    </option>
                  ))}
                </select>
                <select id="year">
                  {years.map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>
              </th>
              <th>
                <button>{">"}</button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="calendarMatrix">
        <table>
          <tbody>
            {matrix.blocks.map((time, index) => (
              <tr key={`time_${index}`}>
                {time.map((day, dayIndex) => (
                  <th key={`day_${dayIndex}_${index}`}>{day}</th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalendarMain;
