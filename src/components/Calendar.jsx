import CalendarHeader from "./calendarHeader/CalendarHeader";
import CalendarMain from "./calendarMain/CalendarMain";
import "./calendar.css";
import Footer from "./calendarFooter/CalendarFooter";

function MyCalendar() {
  return (
    <div className="myCalendar">
      <CalendarHeader />
      <CalendarMain />
      <Footer />
    </div>
  );
}
export default MyCalendar;
