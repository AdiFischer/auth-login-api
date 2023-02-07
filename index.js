import express from "express";
import cors from "cors"
import { userLogin, addNewUser, updateUser } from "./src/users.js";
import { isUserReallyUser } from "./src/middleware.js";


const app = express()
app.use(cors())
app.use(express.json())

app.post('/login', userLogin)
app.post('/users', addNewUser)
app.patch('/users/:uid', isUserReallyUser, updateUser)
const PORT = 3030

app.listen(PORT, () => console.log(`listening to http://localhost:${PORT}....`))