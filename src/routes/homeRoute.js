import express from 'express';
import homeController from '../controllers/homeController.js';

const router = express.Router();


// ---------------------------------------------- //
// GET
// ---------------------------------------------- //

router.get('/', homeController.renderHome);


// ---------------------------------------------- //
// POST
// ---------------------------------------------- //

router.post('/', homeController.receivePost);


// ---------------------------------------------- //
// exports
// ---------------------------------------------- //

export default router;
