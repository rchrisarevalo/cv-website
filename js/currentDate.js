var grad_date = new Date(2023, 4, 13)
var today_date = new Date()
var ms = grad_date - today_date

var num_days_msg = document.getElementById("num_days")
var grad_date_msg = document.getElementById("grad_day")

// The total number of days from today until my expected graduation date
var num_days = Math.round(ms * (0.001 / 1) * (1 / 60) * (1 / 60) * (1 / 24)) + 1

num_days_msg.innerHTML = [num_days + " days"]

if (num_days <= 0){
    grad_date_msg.style.display = 'none;'
}