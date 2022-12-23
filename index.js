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
  const records = []
  for (let employee of arr){
    records.push(createEmployeeRecord(employee))
  }
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


// Testing data
const charlesMash = createEmployeeRecord(["Charles", "Swaleh", "Cyber", 1200])
const timeInCharles = createTimeInEvent(charlesMash, "2022-12-23 0900")
const timeOutCharles = createTimeOutEvent(charlesMash, "2022-12-23 1900")
const timeInCharlesSat = createTimeInEvent(charlesMash, "2022-12-24 1000")
const timeOutCharlesSat = createTimeOutEvent(charlesMash, "2022-12-24 2200")
