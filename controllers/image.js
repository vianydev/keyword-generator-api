const Clarifai = require('clarifai');

//Clarifai API
const app = new Clarifai.App({
    apiKey: '094371494c56468d8e84701b443ae668'
   });

const handleApiCall = (req, res) => {
    app.models.predict(Clarifai.GENERAL_MODEL, req.body.input)
    .then(data =>{
        res.json(data)
    })
    .catch(err => res.status(400).json('unable to connect API'))
}

module.exports = {
    handleApiCall
}