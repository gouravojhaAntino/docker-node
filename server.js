const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet')

app.use(cors());
app.use(express.json());
app.use(helmet());


app.get("/api",(req,res) => {
    res.json({success: true, message: 'Nikal Laude'})
})

app.listen(3000, () => {
    console.info('Server up on port 3000');
})