export const getPhoneMask = (value) => {
	var x = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
	return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
}

export const paramsValidationRegister  = (name, phoneNumber, city) => {
	if (name, phoneNumber, city) {
		if (name == '' || phoneNumber == '' || city == '' || phoneNumber.length < 15) {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}

}

export const paramsValidationEdit = (name, phoneNumber, city, newName, newPhoneNumber, newCity) => {
	if ((name == newName && phoneNumber == newPhoneNumber && city == newCity) || 
		newName == '' || newPhoneNumber == '' || newCity == '' || city == '' ) {
		return true;
	} else { 
		return false;
	}
}

export const compare = ( a, b ) => {
	if ( a.name < b.name ){
	  return -1;
	}
	if ( a.name > b.name ){
	  return 1;
	}
	return 0;
  }
  