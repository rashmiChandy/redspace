const express = require("express")
const cors = require('cors');


const app = express();
const rootpath = "/api";
app.use(cors());
app.use(express.json());

// star wars API
const starwarsRouter = require('./routes/starwars')
app.use(rootpath+'/starwars/people', starwarsRouter)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})