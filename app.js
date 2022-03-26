// npx nodemon app.js // to live reload

const express = require('express')
const app = express()
var cors = require('cors');
const port = 3333

app.use(cors());

app.get('/', (req, res) => {
	//ID, created timestamp, message, author name, author icon, author ID.
	//json object for readability
	var hardcoded = [
    {
		"id": "1",
		"created": "2015-05-22T14:56:29.000Z",
		"timestamp": "2015-05-22T14:56:28.000Z",
		"message": "wyd lol",
		"authorName": "Alice",
		"authorIcon": "https://batelle.com/wp-content/uploads/2021/07/cropped-batelle-fav-1-270x270.png",
		"authorID": "1",
		
    },
    {
		"id": "2",
		"created": "2015-05-22T14:56:29.000Z",
		"timestamp": "2015-05-22T14:56:28.000Z",
		"message": "not much wbu?",
		"authorName": "Bob",
		"authorIcon": "https://batelle.com/wp-content/uploads/2021/07/cropped-batelle-fav-1-270x270.png",
		"authorID": "2",
    },
    {
		"id": "3",
		"created": "2015-05-22T14:56:29.000Z",
		"timestamp": "2015-05-22T14:56:28.000Z",
		"message": "workin'",
		"authorName": "Alice",
		"authorIcon": "https://batelle.com/wp-content/uploads/2021/07/cropped-batelle-fav-1-270x270.png",
		"authorID": "1",
    }
	];
	
	console.log(hardcoded);
	
	res.json(hardcoded)
})

app.listen(port, () => {
  console.log(`SimpleChat API on port ${port}`)
})