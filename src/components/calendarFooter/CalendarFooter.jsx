import "./calendarFooter.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerBut">
        <button id="today">{"Today"}</button>
      </div>
      <div className="footerBut">
        <button id="delete">{"Delete"}</button>
      </div>
    </div>
  );
};

export default Footer;
