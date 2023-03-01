function getSecondsToTomorrow() {

	let d = new Date();
	
	return (23 - d.getHours()) * 3600 + (60 - d.getMinutes()) * 60 + (60 - d.getSeconds());
}

