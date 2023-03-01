let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

alert( sumSalaries(salaries) );

function sumSalaries(salaries) {
	return Object.values(salaries).reduce((sum, curr) => sum + curr, 0);
}
