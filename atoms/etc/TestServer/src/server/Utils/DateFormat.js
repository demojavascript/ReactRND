const MONTHSNAME = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const DAYSNAME   = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DateFormat = function(timestamp) {
  var objDate = new Date(timestamp);
  const monthName = MONTHSNAME[objDate.getMonth()];
  const dayName   = DAYSNAME[objDate.getDate()];
  const month     = objDate.getMonth();
  const day       = objDate.getDate();
  const year      = objDate.getFullYear();
  const HH        = objDate.getHours();
  const MM        = objDate.getMinutes()
  const SS        = objDate.getSeconds();
  return day+" "+monthName+" "+year;
}

module.exports = DateFormat;
