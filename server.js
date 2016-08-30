import app from "./config/app"
import http from "http"

const port = app.get('port')

http.createServer(app).listen(port, ()=>{
  console.log('server is running:'+ port)
})
