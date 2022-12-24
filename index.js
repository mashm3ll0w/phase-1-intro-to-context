// Your code here
function createEmployeeRecord(arr){
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(arr){
  const records = arr.map(employee => createEmployeeRecord(employee))
  return records
}


function createTimeInEvent(employeeObj, dateStamp){
  employeeObj.timeInEvents.push(
    {
    type: "TimeIn",
    date: dateStamp.split(" ")[0],
    hour: parseInt(dateStamp.split(" ")[1], 10)
  }
  )
  return employeeObj
}

function createTimeOutEvent(employeeObj, dateStamp){
  employeeObj.timeOutEvents.push(
    {
    type: "TimeOut",
    date: dateStamp.split(" ")[0],
    hour: parseInt(dateStamp.split(" ")[1], 10)
  }
  )
  return employeeObj
}



function hoursWorkedOnDate(employeeObj, date){
  for(let x = 0; x < employeeObj.timeInEvents.length; x++){
    if(employeeObj.timeInEvents[x].date == date){
      return (employeeObj.timeOutEvents[x].hour - employeeObj.timeInEvents[x].hour) / 100
    }
  }
}

function wagesEarnedOnDate(employeeObj, date){
  return hoursWorkedOnDate(employeeObj, date) * employeeObj.payPerHour
}

function allWagesFor(employeeObj){
  let total = 0
  for (let i = 0; i < employeeObj.timeInEvents.length; i++){
    total += wagesEarnedOnDate(employeeObj, employeeObj.timeInEvents[i].date)
  }
  return total
}

function calculatePayroll(arr){
  let total = 0
  arr.forEach(employee => {
    total += allWagesFor(employee)
  });
  return total
}


// Testing data
const charlesMash = createEmployeeRecord(["Charles", "Swaleh", "Cyber", 1200])
const timeInCharles = createTimeInEvent(charlesMash, "2022-12-23 0900")
const timeOutCharles = createTimeOutEvent(charlesMash, "2022-12-23 1900")
const timeInCharlesSat = createTimeInEvent(charlesMash, "2022-12-24 1000")
const timeOutCharlesSat = createTimeOutEvent(charlesMash, "2022-12-24 2200")

const swalehMash = createEmployeeRecord(["Swaleh", "Charles", "Cyber", 1400])
const timeInSwaleh = createTimeInEvent(swalehMash, "2022-12-23 0600")
const timeOutSwaleh = createTimeOutEvent(swalehMash, "2022-12-23 2300")
const timeInSwalehSat = createTimeInEvent(swalehMash, "2022-12-24 1100")
const timeOutSwalehSat = createTimeOutEvent(swalehMash, "2022-12-24 2300")