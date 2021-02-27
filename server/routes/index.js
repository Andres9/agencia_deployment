const express = require('express');

const router = express.Router();

/**Controladores */
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function(){
    router.get('/',homeController.consultasHomepage);
    
    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes',viajesController.mostrarViaje);

    router.get('/viajes/:id',viajesController.mostrarViajes);

    router.get('/testimoniales',testimonialesController.mostrarTestimoniales);

    //Cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    return router;
}