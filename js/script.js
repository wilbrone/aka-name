var dayName = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var year;
var MM;
var DD;
var gender;




function validate(){
    // assigning my input data to the variables
    var year= document.getElementById("year").value;
    var MM= document.getElementById("month").value;
    var DD= document.getElementById("day").value;
    var gender= document.querySelector('input[name="gender"]:checked').value;

    // invoking the function that brings the name to be trigeered
    calculateDay(gender, MM, year, DD);  

    // this is for validating that the fields are entered correctly
    if(year==""){
      document.getElementById("crazyoutput").innerHTML = "Please give your Year of Birth";
  
      return false;
    }
    if(MM=="" || MM<0 || MM>12){
      document.getElementById("crazyoutput").innerHTML = "Please Enter the Month you were born";

      return false;
    }
    if(DD=="" || DD<0 || DD>31){
      document.getElementById("crazyoutput").innerHTML = "Please give your Day of Birth";

      return false;
    }
    if(gender[0].checked== false && gender[1].checked==false){
      document.getElementById("crazyoutput").innerHTML = "Please give your Gender";

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

    var dayNumber = date.getDay();
    if (gender==="male"){
      name=maleName[dayNumber];
    }else{
      name=femaleName[dayNumber];
    }
    document.getElementById("crazyoutput").innerHTML = name;
    return name;
}

