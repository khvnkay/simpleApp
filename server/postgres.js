const pg = require ('pg');
require('dotenv').config();

let pgClient = new pg.Client(process.env.POSTGRES_CONNECTION_URL);
// let pgClient = new pg.Client(process.env.POSTGRES_CONNECTION_URL);
// let pgClient = new pg.Pool(config);
console.log('eeee',process.env.POSTGRES_CONNECTION_URL);

pgClient.connect((err, client, next) => {
	console.log(err)
  pgClient = client;
  if(err)   {
	  console.log('eeee',err);
  }
 
//   client.on('notification', function(data) {
//     // console.log('xxx noti-----',topic, data.payload);
//       if(data.payload){
//       }
//   });
//   client.query('LISTEN watch_realtime_trainingdatascore');
});





module.exports = pgClient;