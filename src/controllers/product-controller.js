const mongoose = require('mongoose');
const Product = mongoose.model('Product');
exports.get = (req, res, next) => {
    Product
        //    active so traz  apelios indicados
        .find({active: true}, 'title price slug')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};
exports.getBySlug = (req, res, next) => {
    Product
        //    active so traz  apelios indicados
        .findOne({
            slug: req.params.slug,
            active: true
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};
exports.post = (req, res, next) => {
    console.log(req.body)
    var product = new Product(req.body);

    product
        .save()
        .then(x => {
            res.status(201).send({
                message: 'preduto cadastrado com sucesso!',
                data: x
            });
        }).catch(e => {
            res.status(400).send({
                messagem: 'falha ap cadastrar o produto',
                data: e
            })
        });

};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};