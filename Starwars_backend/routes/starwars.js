const express = require('express')
const request = require('request');
const router = express.Router();

const externalStarWarsAPI = 'https://swapi.dev/api';

// Getting information about a character in the Star Wars universe.
router.get('/:id', (req, res) => {
    let starWarsApiURL = externalStarWarsAPI+'/people/'+req.params.id;
    getDetails(starWarsApiURL).then(apiResp=>{
        buildApiResponse(res,apiResp);

    }).catch((error)=>{
        res.status(500).json(
        {
            success: false,
            message:"Internal Server Error occurred while fetching details",
            error:error.message
        });
    })
})
// Building the API response in parts and finally assembling all results using async await
async function buildApiResponse(res,starwarsCharacterDetails){
    let personData ={};
    let homePlanet = await getDetails(starwarsCharacterDetails['homeworld']);
    let films = await getDetailsFromList(starwarsCharacterDetails['films']);
    let species = await getDetailsFromList(starwarsCharacterDetails['species']);
   
    personData = {
        name:starwarsCharacterDetails['name'],
        height: starwarsCharacterDetails['height'],
        mass: starwarsCharacterDetails['mass'],
        haircolor: starwarsCharacterDetails['hair_color'],
        skinColor: starwarsCharacterDetails['skin_color'],
        gender: starwarsCharacterDetails['gender'],
        birthYear: starwarsCharacterDetails['birth_year'],
        homePlanet: buildHomePlanet(homePlanet),
        species:buildSpecies(species),
        films:buildFilms(films)
    }
    res.status(200).json(personData);
}

function buildHomePlanet(homePlanetDetails){
    let homePlanet ={};
    if(homePlanetDetails){
        homePlanet = {
            title : homePlanetDetails['name'],
            terrain: homePlanetDetails['terrain'],
            population: homePlanetDetails['population']
        }
    }
    return homePlanet;
}

function buildSpecies(speciesDetails){
    let species = [];
    if(speciesDetails){
        speciesDetails.forEach(specie =>{
            species.push({
                name:specie['name'],
                average_lifespan: specie['average_lifespan'],
                classification:specie['classification'],
                language:specie['language']
            })
        })
    }
    return species;
} 

function buildFilms(filmDetails){
    let films = [];
    if(filmDetails){
        filmDetails.forEach(film =>{
            films.push({
                title:film['title'],
                director: film['director'],
                producers:film['producer'],
                releaseDate:film['release_date']
            })
        })
    }
    
    return films;

}
// List of External API calls
function getDetailsFromList(urlList){
    let details = [];
    urlList.forEach(url => {
        details.push(getDetails(url));
    });
    return Promise.all(details);

}
// External API call
function getDetails( url){
    return new Promise((resolve,reject) =>{
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(JSON.parse(body));
                
            }
            else reject({}); 
        })
    });
}
    
module.exports = router;