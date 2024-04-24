const express = require('express')
const cors = require("cors")
const app = express()
const port = process.env.PORT || 80

// app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.json({message:"Hello from Mayank"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})