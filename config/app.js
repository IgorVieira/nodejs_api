import express from 'express';

let listBooks = [
      { id:1, name:'Default Book' },
      { id:2, name:'ReactJs' },
      { id:3, name:'ReactJS + NodeJS + Redux' }
  ]
  
const app = express();



app.route('/')
  .get((req, res)=>{
    res.json(listBooks)
  })
app.get('*', (req, res)=> res.status(404).render('404'))
app.set('port', (process.env.PORT || 3000));



export default app;
