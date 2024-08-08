const currentDate = document.querySelector(".current-date");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalender = () => {
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
}
renderCalender();