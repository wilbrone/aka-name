var dayName = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var mName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var fName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
// var CC, YY, MM, d, name;
  var year;
  var MM;
  var DD;
  var gender;

  function compile(){
      validate();
     alert ("Your Akan name is " +calculateDay());
      findGender();
  }
function validate(){
    // assigning my data to variables
  var year= document.getElementById("year").value;
  var MM= document.getElementById("month").value;
  var DD= document.getElementById("day").value;
  var gender= document.querySelector('input[name="gender"]:checked').value;

  // calling the function that brings the name to be trigeered
  calculateDay(gender, MM, year, DD);  

  // this is for validating that the fields are entered correctly
  if(year==""){
      alert("Enter valid year");
      return false;
  }
  if(month=="" || month<0 || month>12){
      alert("Enter valid month");
      return false;
  }
  if(day=="" || day<0 || day>31){
      alert("Enter valid day of birth");
      return false;
  }
  if(gender[0].checked== false && gender[1].checked==false){
      alert("Enter your gender");
      return false;
  }
  else{
      return true;
  }
}

// this calculates the day and using that to get the akan name
function calculateDay(gender, MM, year, DD){
  console.log(DD);

  var name="";
  var date= new Date(year+ "/" +MM +"/" +DD);
  console.log(date);

  var day = date.getDay();
  if (gender==="male"){
      name=mName[day]
  }else{
      name=fName[day]
  }
 return name;
}