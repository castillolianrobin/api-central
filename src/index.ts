import express from 'express';
const app = express();
const PORT = 8080;

app.get('/', (_, res)=> {
  res.send('SAMPLE API FOR SAMPLE DASHBOARD');
});



app.listen(PORT, ()=> {
  // tslint:disable-next-line:no-console
  console.log('Server running at Port ' + PORT);
});
