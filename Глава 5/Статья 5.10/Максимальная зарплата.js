


function topSalary(obj) {

	let [name] = Object.entries(obj).reduce( ( max, next ) => max[1] >= next[1] ? max : next , [ null, 0 ] )

	return name;

}