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

  let year = temp.getFullYear();
  let month = "";
  switch (temp.getMonth()) {
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
    default:
      month = "Jan";
      break;
  }
  let day = temp.getDate();
  let hour = temp.getHours() % 12;
  hour = hour === 0 ? 12 : hour;
  let AMP = temp.getHours() > 12 ? "PM" : "AM";
  let minute =
    temp.getMinutes() < 10 ? "0" + temp.getMinutes() : temp.getMinutes() + "";

  return (
    hour + ":" + minute + " " + AMP + " · " + month + " " + day + ", " + year
  );
}
