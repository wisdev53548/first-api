var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
	{
		'id': '232kAk',
		'text': 'Eggs'
	},
	{
		'id': 'dkP345',
		'text': 'Milk'
	},
	{
		'id': 'dkcuu7',
		'text': 'Bacon'
	},
	{
		'id': '72hdy',
		'text': 'Frogs Legs'
	}
]

var students = [
	{
		'First name': 'Ian',
		'Last name': 'Stone',
		'Grade': 3
	},
	{
		'First name': 'Michael',
		'Last name': 'Perry',
		'Grade': 3
	},
	{
		'First name': 'Tyler',
		'Last name': 'James',
		'Grade': 5
	}
]

app.get('/', function(req, res) {
	res.send(ingredients);
});

app.post('/', function(req, res) {
	var ingredient = req.body;
	if (!ingredient || ingredient.text === '') {
		res.status(500).send({error: 'Your ingredient must have text'})
	} else {
		ingredients.push(ingredient);
		res.status(200).send(ingredients);
	}
})

app.get('/students', function(req, res) {
	res.send(students);
})

app.post('/students', function(req, res) {
	var student = req.body;
	if (!student || student.text === '') {
		res.status(500).send({error: 'You need to input student information'})
	} else {
		students.push(student);
		res.status(200).send(students);
	}
})

app.listen(3000, function() {
	console.log("First API running on port 3000!");
});