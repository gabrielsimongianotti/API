const guid = require('guid');
const repository = require('../repositories/order-repository');

exports.post = async (req, res, next) => {
    let data = {
        customer: '',
        number: '',
        items: []
    };
    data.number = grid.raw().substring(0, 6);
    try {
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0, 6),
            items: req.body.items
        });
        res.status(201).send({
            message: 'pedido cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            messagem: 'falha ao cadastrar o pedido'
        });
    }

};