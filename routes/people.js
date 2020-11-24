const{
    index,
    create,
    update,
    destroy
  } = require('../controllers/people');
  
  module.exports = router =>{
    router.get('/people',index);
    router.post('/people',create);
    router.post('/people/update',update);
    router.post('/people/destroy',destroy);
  };