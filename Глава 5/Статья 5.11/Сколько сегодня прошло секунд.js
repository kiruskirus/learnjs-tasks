function getSecondsToday(){
	
	let date = new Date();

	date.setHours(0, 0, 0, 0);

	return Math.round((new Date() - date) / 1000);

}