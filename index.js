const employee = {
name: "Dorahey",
streetAddress: "2159 California Street",
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = {...object }
    newEmployee[key] = value
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value
   return object
  }

  function deleteFromEmployeeByKey(object, key, value){
    const newEmployee = {...object }
    delete newEmployee[key] 
    return newEmployee
  }

  function destructivelyDeleteFromEmployeeByKey(object, key, value){
    object[key] = value
    delete object[key]
    return object
  }
  
