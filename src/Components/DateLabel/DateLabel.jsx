import "./DateLabel.css";

const DateLabel = (props) => {
  return (
    <div className="time_stamp">
      <p>{getTimeString(props.timeStamp)}</p>
    </div>
  );
};

export default DateLabel;

function getTimeString(timeStamp) {
  const temp = new Date(timeStamp);

  let year = temp.getFullYear() % 100;
  year = year < 10 ? "0" + year : "" + year;
  let month = temp.getMonth() + 1;
  let day = temp.getDate();
  let hour = temp.getHours() % 12;
  hour = hour == 0 ? 12 : hour;
  let AMP = temp.getHours() > 12 ? "PM" : "AM";
  let minute =
    temp.getMinutes() < 10 ? "0" + temp.getMinutes() : temp.getMinutes() + "";

  return month + "-" + day + "-" + year + " " + hour + ":" + minute + " " + AMP;
}
