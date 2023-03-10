const { Router } = require('express');
// Importar todos los routers;
const videogamesMiddleware = require('./videogames');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogamesMiddleware);


module.exports = router;