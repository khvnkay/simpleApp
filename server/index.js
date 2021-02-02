const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config();
app.use(cors());
const pgClient = require("./postgres");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/test1', (req, res) => {
  res.send('work')
})
app.get('/testdb',async (req, res) => {
   

      const data = await pgClient.query('SELECT * FROM Persons');
	
      return  res.send(data.rows)
      
//   res.send('work')
})

const port = process.env.PORT || 5000;
app.listen(port);


console.log('App is listening on port http://127.0.0.1:' + port);

