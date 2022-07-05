import "./calendarHeader.css";

const CalendarHeader = () => {
  return (
    <div className="header">
      <div id="title">
        <p>Interview Calendar</p>
      </div>
      <button id="newEvent">{"+"}</button>
    </div>
  );
};

export default CalendarHeader;
