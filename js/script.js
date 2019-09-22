var dayName = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
var mName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var fName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var CC, YY, MM, d, name;
  var year;
  var month;
  var day;
  var gn;
  function compile(){
      validate();
     alert ("Your Akan name is " +calculateDay());
      findGender();
  }
function validate(){
  this.calculateDay(gender)  
    // assigning my data to variables
  var year= document.getElementById("year").value;
  var month= document.getElementById("month").value;
  var day= document.getElementById("day").value;
  var gender= document.querySelector('input[name="gender"]:checked').value;
  console.log(day);
  console.log(gender);

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
      alert("Enter your gender")
      return false;
  }
  else{
      return true;
  }
}

function calculateDay(gender){
  var name="";
  // year=
  // MM=
  // DD=
  var date= new Date(year+ "/" +MM +"/" +DD);
  var day = date.getDay();
  if (gender==="male"){
      name=mName[day]
  }else{
      name=fName[day]
  }
 return name;
}