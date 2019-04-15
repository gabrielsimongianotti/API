const express = require('express');
const router = express.Router();
const controller = require('../controllers/validacao')
//api recebe informação
router.post('/', controller.post);
//api muda o produto com id 
router.put('/:id', controller.put);
//deleta um produto
router.delete('/', controller.delete);

module.exports = router