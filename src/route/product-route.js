const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.post('/', controller.post);
//atualiza as informações do produto
router.put('/:id',controller.put);
router.delete('/', controller.delete);
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
//fintra por id
router.get('/admin/:id', controller.getById);
//fintra por tags
router.get('/tags/:tag',controller.getByTag);
module.exports= router;