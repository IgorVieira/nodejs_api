import app from "./config/app"


const port = app.get('port')


app.listen(port, ()=>{
  console.log('server is running:'+ port)
})
