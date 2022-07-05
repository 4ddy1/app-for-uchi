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
  return (
    <div className="main">
      <div className="calendarSelector">
        <table>
          <thead>
            <table className="dayOfWeek">
              <table className="dayName">
                <tr>
                  {weekDayNames.map((name) => (
                    <th key={name}>{name}</th>
                  ))}
                </tr>
              </table>
              <table className="dayNumber">
                {monthData.map((week, index) => (
                  <tr key={index} className="week">
                    {week.map((date, index) =>
                      date ? (
                        <td key={index}>{date.getDate()} </td>
                      ) : (
                        <td key={index} />
                      )
                    )}
                  </tr>
                ))}
              </table>
            </table>
            <div className="slider">
              <button>{"<"}</button>
              <div className="selects">
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
              </div>
              <button>{">"}</button>
            </div>
          </thead>
        </table>
      </div>
      <div className="calendarMatrix">
        <table>
          <tbody>
            {matrix.blocks.map((time) => (
              <tr>
                {time.map((day) => (
                  <th>{day}</th>
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
