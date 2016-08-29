import express from 'express';


const app = express();

app.route('/books')
  .get((req, res)=>{
    res.json([
          {
            id:1,
            name:'Default Book'
          },
          {
            id:2,
            name:'ReactJs'
          },
          {
            id:3,
            name:'ReactJS + NodeJS + Redux'
          }
      ])
  })
app.set('port', (process.env.PORT || 3000));

export default app;
