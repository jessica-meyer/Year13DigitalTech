const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalender = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // get first day of month
  lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // get last day of month
  lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // get last date of month
  lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // get last date of previous month
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) { // create li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) { // create li of all days of current month
    // adding active class to current day
    let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                  && currYear === new Date().getFullYear() ? "active" : "";
    liTag += `<li class="${isToday}" data-date="${i}" data-month="${currMonth}" data-year="${currYear}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) { // create li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;


  
  // Add click event listener to each day
  const days = document.querySelectorAll(".days li");
  days.forEach(day => {
    day.addEventListener("click", (event) => {
      const clickedDay = event.target;
      const day = clickedDay.dataset.date;
      const month = clickedDay.dataset.month;
      const year = clickedDay.dataset.year;

      if (!clickedDay.classList.contains("inactive")) {
        const selectedYear = parseInt(year);
        const selectedMonth = parseInt(month) + 1;
        const selectedDay = parseInt(day);

        console.log(`Year: ${selectedYear}, Month: ${selectedMonth}, Day: ${selectedDay}`);
        // write rec
        
      }
    });
  });
}

renderCalender();

prevNextIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if(currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date - new Date();
    }
    
    renderCalender();  
  });
});

/*------------------------------------------------------------*/
// writeEvent()
// Called by create event button being pressed
/*------------------------------------------------------------*/
function writeEvent() {
  eventTitle = document.getElementById("eventTitle").value;
  eventDesc = document.getElementById("eventDesc").value;
  eventDate = document.getElementById("date").value;
  eventMonth = document.getElementById("month").value;
  eventYear = document.getElementById("year").value;

  if (eventTitle === '' || eventDesc === '') {
    alert("Empty Field! Please fill it in to continue!");
    document.getElementById('eventTitle').value='';
    document.getElementById('eventDesc').value='';
  } 
  else if (eventDate === '--Select Day--' || eventMonth === '--Select Month--' || eventYear === '--Select Year--') {
    alert("Empty Date! Please select a date to continue!");
  }
  else {
    writeKey = userDetails.uid + '/' + eventYear + '/' + eventMonth + '/' + eventDate

    eventInfo.title = eventTitle
    eventInfo.desc = eventDesc
    eventInfo.date = eventDate
    eventInfo.month = eventMonth
    eventInfo.year = eventYear

    fb_writeRec(CALENDER, writeKey, eventInfo, fbR_procWrite);

    document.getElementById('eventTitle').value='';
    document.getElementById('eventDesc').value='';
    document.getElementById('date').value='--Select Day--';
    document.getElementById('month').value='--Select Month--';
    document.getElementById('year').value='--Select Year--';
  }
}