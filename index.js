function signup()
{
	var uname=document.getElementById("uname").value;
	var email=document.getElementById("email").value;
	var pass=document.getElementById("pass").value;
	var country=document.getElementById("country").value;
	var male=document.getElementById("male").checked;
	var female=document.getElementById("female").checked;
	var check=document.getElementById("check").checked;

	var status=true;

	uname=uname.trim();
	email=email.trim();
	pass=pass.trim();
	country=country.trim();

	if(uname=="")
	{
		document.getElementById("uname").style.borderColor="red";
		document.getElementById("unameerr").innerHTML="* Invalid Name";
		document.getElementById("unameerr").style.color="red";
		status=false;
	}
	else
	{
		document.getElementById("uname").style.borderColor="";
		document.getElementById("unameerr").innerHTML="";
	}

	if(email=="")
	{
		document.getElementById("email").style.borderColor="red";
		document.getElementById("emailerr").innerHTML="* Invalid Email";
		document.getElementById("emailerr").style.color="red";
		status=false;
	}
	else
	{
		document.getElementById("email").style.borderColor="";
		document.getElementById("emailerr").innerHTML="";
	}


	if(pass=="")
	{
		document.getElementById("pass").style.borderColor="red";
		document.getElementById("passerr").innerHTML="* Invalid Password";
		document.getElementById("passerr").style.color="red";
		status=false;
	}
	else
	{
		document.getElementById("pass").style.borderColor="";
		document.getElementById("passerr").innerHTML="";
	}

	if(country=="")
	{
		document.getElementById("country").style.borderColor="red";
		document.getElementById("countryerr").innerHTML="* Invalid Country";
		document.getElementById("countryerr").style.color="red";
		status=false;
	}
	else
	{
		document.getElementById("country").style.borderColor="";
		document.getElementById("countryerr").innerHTML="";
	}

	if(male==true || female==true)
	{
		document.getElementById("gendererr").style.borderColor="";
	}
	else
	{
		document.getElementById("gendererr").innerHTML="* Invalid Gender";
		document.getElementById("gendererr").style.color="red";
		status=false;
	}

	if(check==true)
	{
		document.getElementById("checkerr").style.borderColor="";
	}
	else
	{
		document.getElementById("checkerr").innerHTML="* Invalid T&C";
		document.getElementById("checkerr").style.color="red";
		status=false;
	}

	if(status==true)
	{
		alert("Thank you For Your Registration..")
		document.getElementById("mymodal1").style.display="none";					
	}
}

function login()
{
	var name=document.getElementById("name").value;
	var password=document.getElementById("password").value;

	var status=true;

	name=name.trim();
	password=password.trim();

	if(name=="")
	{
		document.getElementById("name").style.borderColor="red";
		document.getElementById("nameerr").innerHTML="* Invalid Name";
		document.getElementById("nameerr").style.color="red";
		status=false;
	}
	else
	{
		document.getElementById("name").style.borderColor="";
		document.getElementById("nameerr").innerHTML="";
	}

	if(password=="")
	{
		document.getElementById("password").style.borderColor="red";
		document.getElementById("passworderr").innerHTML="* Invalid Password";
		document.getElementById("passworderr").style.color="red";
		status=false;
	}
	else
	{
		document.getElementById("password").style.borderColor="";
		document.getElementById("passworderr").innerHTML="";
	}

	if(status==true)
	{
		alert("Welcome User..");
		document.getElementById("mymodal2").style.display="none";					
	}
}