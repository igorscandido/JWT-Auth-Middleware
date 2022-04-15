import express from 'express'
import routes from './routes'
import dotenv from 'dotenv'

dotenv.config({path: __dirname + "/.env"})

const port = 3030

const app = express()
app.use(express.json())

app.use('/',routes)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})