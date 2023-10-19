
import { onRequest } from 'firebase-functions/v2/https'
import express from 'express'
import cors from 'cors'
import { getAllCoffees, addCoffee } from './src/coffees.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get("/test", (req, res) => res.send ("It is working") )

app.get("/coffees", getAllCoffees)
app.post("/coffees", addCoffee)

export const api = onRequest(app)