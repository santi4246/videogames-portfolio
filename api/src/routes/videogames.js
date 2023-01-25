const express = require('express');
const router = express.Router();
const controllers = require('../controllers/videogames/index');

router.get('/', async (req, res) => {
    try {
        const games = await controllers.listGames();
        return res.status(200).json({videogames: games});
    } catch (error) {
        res.status(400).json({error: `Something hapened with API connection`});
    }
});

module.exports = router;