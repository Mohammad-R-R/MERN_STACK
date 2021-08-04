const PersonController = require('../controllers/auother.Controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/people', PersonController.getAllPeople);
    app.delete('/api/people/:id', PersonController.deletePerson);
    app.put('/api/people/:id', PersonController.updatePerson);
}