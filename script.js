//to ensure that the page has loaded first before js file does in case js requires elements that need to load
if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)

}

//if page is no longer loading i.e done loading
else {
	ready()
}


function ready()
{
	dateCompare()
	document.getElementById("accountMgmt").addEventListener("click", accountClicked)
	document.getElementsByClassName("close")[0].addEventListener("click", closeClicked)
	document.getElementById('registerForm').addEventListener('click', registerLinkClicked)

	if (document.getElementById('log-in-header').innerHTML == 'Register') {
		newAccountRegister()
	}

	else {
		return
	}
}



//-----------------------------------------------------------------DAYS LEFT COUNTER-------------------------------------------------------------------//
function diffDays(today, finalDay)
{
	return Math.ceil(Math.abs(finalDay - today) / (1000 * 60 * 60 * 24)) //last part is to convert the milliseconds
}

function dateCompare()
{
	let today = new Date()
	today = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())

	let finalDate = new Date()
	finalDate = Date.UTC(2022, 2, 5)

	var limitedDate = document.getElementById("daysLeft")
	limitedDate.innerHTML = diffDays(today, finalDate) + " days left."
}


//-----------------------------------------------------------LOG-IN WINDOW CLOSE OR DISPLAY--------------------------------------------------------------//
var modal = document.getElementById("modal")
window.onclick = function (event)  // When the user clicks anywhere outside of the modal, close it
{
	if (event.target == modal) {
		modal.style.display = "none"
	}
}
function accountClicked()
{
	document.getElementById("modal").style.display = "block"
	accountLogIn()
}

function closeClicked(event) 
{
	document.getElementById("modal").style.display = "none"
}


//-----------------------------------------------------CHANGE TO REGISTER FORM FUNCTIONALITY--------------------------------------------------------------//
function registerLinkClicked(event) 
{
	document.getElementById('log-in-header').innerHTML = 'Register'
	document.getElementsByClassName('registerText')[0].outerHTML = `<p>Already a Member? Click <a id="registerForm">here</a> to Log In.</p>`
	document.getElementById('btn-log').innerHTML = 'Register'
}

//-------------------------------------------------------------REGISTER FUNCTIONALITY--------------------------------------------------------------------//
function newAccountRegister() 
{
	let newUser = Object.assign(newUser, accountLogIn(user))

	newUser =
	{
		Username: document.getElementById('usrName').value,
		Password: document.getElementById('passWrd').value,
		checkFieldsValidity: function ()
		{
			if (document.getElementById('usrName').value == '' || document.getElementById('passWrd').value == '') {
				alert('Required fields cannot be empty. Please try again.')
			} else {
				alert(`Registration Successful. Welcome ${this.userName}`)
				document.getElementById('modal').style.display = 'none'
			}
		}
	}
	document.getElementById('btn-log').addEventListener('click', newUser.checkFieldsValidity)
}

//--------------------------------------------------------------LOG-IN FUNCTIONALITY---------------------------------------------------------------------//
function accountLogIn() 
{
	let userName = document.getElementById('usrName')
	let passWrd = document.getElementById('passWrd')
	let user =
	{
		Username: userName.value,
		Password: passWrd.value,
		accountLogIn: function ()
		{
			if (userName.value == 'Zaam' && passWrd.value == '1234') {
				alert(('Successfully logged in'))
				document.getElementById('accountMgmt').innerHTML = 'MY ACCOUNT'
				document.getElementById('modal').style.display = 'none'
			}
			else if (userName.value != 'Zaam' || passWrd.value != '1234') {
				alert('Incorrect Username or Password. Please try again.')
			}
			else {
				alert('An error has ocurred. Please try again')
			}
		}
	}
	document.getElementById('btn-log').addEventListener('click', user.accountLogIn)
}