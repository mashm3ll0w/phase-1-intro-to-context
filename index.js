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