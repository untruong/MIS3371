/*
    Program name: homework2.js
    Author: Uyen Truong
    Date created: 02/25/2025
    Date last edited: 02/28/2025
    Version: 1.0
    Description: this form is created for patients to fill in their information
*/

const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

function setup()
{
  var error_flag = 0;
  console.log(error_flag);
}
function removedata1() 
{
  document.getElementById("outputformdata").innerHTML = "(Please refill the form)";
}
 
function getcustomerinformation() 
{
  var formcontents = document.getElementById("registration");
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class='output'><th>Requested Information</th><th>Customer Input</th>";
for (i = 0; i < formcontents.length; i++) 
    {
    var element = formcontents.elements[i];
    var datatype = element.type;
    
    console.log("item: " + i + " " + element.name + " = " + element.value);
    
    switch (datatype) 
        {
      case "checkbox":
        if (element.checked) 
        {
          formoutput += "<tr><td align='right'>" + element.name + "</td>";
          formoutput += "<td style='text-align: right;' class='outputdata'>Checked</td></tr>";
        }
        break;
      case "radio":
        if (element.checked) 
        {
          formoutput += "<tr><td align='right'>" + element.name + "</td>";
          formoutput += "<td style = 'text-align: right;' class='outputdata'>" + element.value + "</td></tr>";
        }
        break;
      case "button":
      case "submit":
      case "reset":
        break;
      default:
        formoutput += "<tr><td align='right'>" + element.name + "</td>";
        formoutput += "<td style = 'text-align: right;' class='outputdata'>" + element.value + "</td></tr>";
        }
  }

  formoutput += "</table>";
  document.getElementById("outputformdata").innerHTML = formoutput;

  if (formoutput) 
  {
  document.getElementById("outputformdata").innerHTML = formoutput + "</table>";
  }
}

function getrangedata() 
{
  var slider = document.getElementById("painlevel");
  document.getElementById("rangedisplay").value = slider;
}

function checkfirstname()
{
  {
    x = document.getElementById("firstname").value;
      if( x.length<2) 
      { 
        document.getElementById("firstname_message").innerHTML = "Invalid first name";  
        error_flag = 1;
      }
      else 
      {
        if (x.match(/[a-zA-Z3-5'-]+$/)) 
          {
            document.getElementById("firstname_message").innerHTML = "";  
          }
        else  
          {
            document.getElementById("firstname_message").innerHTML = "Invalid characters, only allow letters apostrophes, dashes";
            error_flag = 1;
          }
      }
  }

}

function checkmiddle()
{
  x = document.getElementById("minit").value;
    if( x.length>0) 
    { 
      if (x.match(/[a-zA-Z ]/)) 
      {
        document.getElementById("minit_message").innerHTML = "";  
      }
      else  
      {
        document.getElementById("minit_message").innerHTML = "Middle initial has to be a single letter";
        error_flag = 1;
      }
    }
}

function checklastname()
{
  {
    x = document.getElementById("lastname").value;
      if( x.length<2) 
      { 
        document.getElementById("lastname_message").innerHTML = "Invalid last name";
        error_flag = 1;  
        }
      else 
        {
        if (x.match(/[a-zA-Z3-5'-]+$/)) 
        {
          document.getElementById("lastname_message").innerHTML = "";  
        }
        else  
        {
          document.getElementById("lastname_message").innerHTML = "Invalid characters, only letters, apostrophes, numbers 2-5, and dashes allowed";
          error_flag = 1;
        }
      }
  }
}

function checkdate()
{
  var x = new Date();  
  var y = new Date();
  y.setFullYear(x.getFullYear() - 120);

  var birthdate = new Date(document.getElementById("dateofbirth").value);
  if (birthdate > x) 
  {  
    document.getElementById("date_message").innerHTML = "Birthdate cannot be in the future";  
    error_flag = 1;  
  } 
  else 
    if (birthdate < y) 
    {  
    document.getElementById("date_message").innerHTML = "Birthdate cannot be more than 120 years ago";  
    error_flag = 1;  
    } 
    else 
    {  
    document.getElementById("date_message").innerHTML = "";  
    }
}

function checkaddr1()
{
  var x = document.getElementById("addr1").value;

  if (x.length < 2) 
  {  
    document.getElementById("addr1_message").innerHTML = "Address has to be 2-30 characters";  
    error_flag = 1;  
  } 
  else 
  {  
    document.getElementById("addr1_message").innerHTML = "";  
  }
}

function checkaddr2()
{
  var x = document.getElementById("addr2").value;

  if (x.length < 2) 
  {  
    document.getElementById("addr2_message").innerHTML = "Address has to be 2-30 characters";  
    error_flag = 1;  
  } 
  else 
  {  
    document.getElementById("addr2_message").innerHTML = "";  
  }
}

function checkemail()
{
  var x = document.getElementById("email").value;

  if (x.length < 5) 
  {  
    document.getElementById("email_message").innerHTML = "Email has to be 5-30 characters";  
    error_flag = 1;  
  } 
  else 
  {  
    if (x.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) 
    {  
        document.getElementById("email_message").innerHTML = "";  
    } else 
    {  
        document.getElementById("email_message").innerHTML = "Invalid email format (use name@domain.tld)";  
        error_flag = 1;  
    }  
  }
}

function checkphoneno()
{
    var x = document.getElementById("phonenumber").value;
  
    if (x.length < 10) 
    {  
        document.getElementById("phone_message").innerHTML = "Phone number has to be 10-digit length";  
        error_flag = 1;  
    } 
    else 
    {  
      if (x.match(/^(\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{4}$/)) 
      {  
        document.getElementById("phone_message").innerHTML = "";  
      } 
      else 
      {  
        document.getElementById("phone_message").innerHTML = "Invalid phone number format. Use formats like 000-000-0000, (000) 000-0000, or 000.000.0000";  
        error_flag = 1;  
      }  
    }
}

function checkcity()
{
  if (document.getElementById("city").value.match(/^[ a-zA-Z3-5'-]+$/)) 
  {
    document.getElementById("city_message").innerHTML = "";  
  }
  else  
  {
    document.getElementById("city_message").innerHTML = "Invalid character in City";
    error_flag = 1;
  }
}

function checkstate() 
{
  x = document.getElementById("state").value;
  if(x=="") 
  {
    document.getElementById("state_message").innerHTML = "Please choose a state";  
    error_flag = 1;
  }
  else 
  {
    document.getElementById("state_message").innerHTML = ""; 
  }
}

function checkuserid() {
  var userInput = document.getElementById("userid");
  var userID = document.getElementById("userid").value;

  if (userInput.length < 1) 
    {  
        document.getElementById("userid_message").innerHTML = "User ID cannot be empty";  
        error_flag = 1;  
    } 
  else if (userID.includes(" ") || !/^[a-zA-Z][a-zA-Z0-9_-]{4,29}$/.test(userID)) 
  { 
    document.getElementById("userid_message").innerHTML = "Invalid User ID. Must be 5-30 characters, start with a letter, contain only letters, numbers, _ or - (no spaces).";
    error_flag = 1;
  } 
      else 
      {
        document.getElementById("userid_message").innerHTML = "";
        userInput.value = userID.toLowerCase(); 
      }
}

function checkpassword1() 
{
  var passwordoutput;
  var passwordinput = document.getElementById("password").value;
  console.log(passwordinput);
    if(passwordinput.search(/[a-z]/) < 0 ) 
    {
      passwordoutput = "Password must contain at least 1 lowercase letter";
      error_flag = 1;
    } 
    else 
    {
      passwordoutput = "";
    }
    document.getElementById("pw_message1").innerHTML = passwordoutput;

    if(passwordinput.search(/[A-Z]/)< 0)  
    {  
      passwordoutput = "Password must contain at least 1 upper case letter";
      error_flag = 1;
    } 
    else 
    {
      passwordoutput = "";
    }
    document.getElementById("pw_message2").innerHTML = passwordoutput;

    if(passwordinput.search(/[0-9]/)<0 ) 
    {   
    passwordoutput = "Password must contain at least 1 number";
    error_flag = 1;
    } 
    else 
    {
    passwordoutput = "";
    }
    document.getElementById("pw_message3").innerHTML = passwordoutput;

    if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) 
    {   
    passwordoutput = "Password must contain at least 1 special character";
    error_flag = 1;
    } 
    else 
    {
    passwordoutput = "";
    }
    document.getElementById("pw_message4").innerHTML = passwordoutput;

  if(passwordinput.length < 8) 
  {
      passwordoutput = "Password must be 8-30 characters";
      error_flag = 1;
  } 
  else 
  {
      passwordoutput = "";
  }
  document.getElementById("pw_message5").innerHTML = passwordoutput;
}
function checkpassword2() 
{
  x=document.getElementById("password").value;
  y=document.getElementById("password2").value;
  if ( x==y ) 
    {
      document.getElementById("password2_text").innerHTML = "";
    } 
  else   
    {
      document.getElementById("password2_text").innerHTML = "Passwords DO NOT match";
      error_flag = 1;
    }
}

/* End of document: homework2.js */

