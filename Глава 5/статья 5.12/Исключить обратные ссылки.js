let room = {

	number: 23,

};

let meetup = {

	title: "Совещание",

	occupiedBy: [{name: "Иванов"}, {name: "Петров"}],

	place: room,
};

room.occupiedBy = meetup;

meetup.self = meetup;

let arr = [];

console.log( JSON.stringify(meetup, function replacer(key, value) {

if (arr.includes(value)) return undefined

arr.push(value)

return value;
}));