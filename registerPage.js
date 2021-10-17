const button = document.getElementById('sumbit');
const fullname = document.getElementById('fname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const male = document.getElementById('dot-1');
const female = document.getElementById('dot-2');
const checkbox = document.getElementById('checkbox');


button.addEventListener('click', e => {
	e.preventDefault();
	if(validateInputs()){
		location.reload();
	}
	
});

function validateInputs() {
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
	let count = 0;
	if(checkFullname(fullnameValue)){
		count+=1;
	}
	if(checkEmail(emailValue)){
		count+=1;
	}
	if(checkPassword(passwordValue)){
		count+=1;
	}
	if(checkGender()){
		count+=1;
	}
	if(checkCheckbox()){
		count+=1;
	}
	// checkEmail(emailValue);
	// checkPassword(passwordValue);
	// checkGender();
	// checkCheckbox();
	// if(!checkFullname(fullnameValue) || !checkEmail(emailValue) || !checkPassword(passwordValue) || !checkGender() || !checkCheckbox()){
	// 	return false;
	// }
	if(count === 5){
		return true;
	}
	return false;
}

function checkFullname(fullnameValue){
	if(fullnameValue === '') {
		error(fullname, 'Username cannot be blank', 'input-container error');
		return false;
	} else {
		success(fullname, 'input-container success');
		return true;
	}
}
function checkEmail(emailValue){
	if(emailValue === '') {
        error(email, 'Email cannot be blank', 'input-container error');
		return false;
	} else if (!isEmail(emailValue)) {
        error(email, 'Not a valid email', 'input-container error');
		return false;
	} else {
		success(email, 'input-container success');
		return true;
	}
}
function checkPassword(passwordValue){
	if(passwordValue === '') {
        error(password, 'Password cannot be blank', 'input-container error');
		return false;
	} else if(passwordValue.length <6){
        error(password, 'Password must more than 6 character', 'input-container error');
		return false;
	} else {
		success(password, 'input-container success');
		return true;
	}
}
function checkGender(){
	if(female.checked || male.checked) {
        success(male, 'gender-option success');
		return true;
	} else {
        error(male, 'Please selecet your gender', 'gender-option error');
		return false;
	}
}
function checkCheckbox(){
	if(checkbox.checked) {
        success(checkbox.parentElement, 'input-checkbox success');
		return true;
	} else {
        error(checkbox.parentElement, 'You must agree to the terms and conditions', 'input-checkbox error');
		return false;
	}
}
function error(input, message, className) {
	const parent = input.parentElement;
	const small = parent.querySelector('small');
	parent.className = className;
	small.innerText = message;
}
function success(input, className) {
	const parent = input.parentElement;
	parent.className = className;
}
	
function isEmail(emailValue) {
	let email = emailValue.split("@");
	let split1 = email[0];
	let split2 = email[1];
	
	console.log(isNaN(split1[1]));
	if(email.length !== 2){
		return false;
	}
	if (split1.length == 0 || split2.length < 3){
		return false;
	}
	if(!isNaN(split1[0])){
		return false;
	}
	if(!split2.includes(".")){
		return false;
	}
	if (emailValue.includes("..") || emailValue.includes(".@") || emailValue.includes("@.") || emailValue.includes("._.")){
		return false;
	}
	if (emailValue.endsWith(".")){
		return false;
	}

	return true;
}

