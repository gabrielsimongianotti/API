const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validator/fluent-validator');
const repository = require('../repositories/product-repository');

exports.get = (req, res, next) => {
    Product
    repository
        .get()
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    let contract = new ValidationContract();

    contract.hasMinLen(req.body.title, 3, "o titulo de conter no minimo 3 caracteres");
    contract.hasMinLen(req.body.slug, 3, "o slug de conter no minimo 3 caracteres");
    contract.hasMinLen(req.body.description, 3, "a description de conter no minimo 3 caracteres");

    // se for contract.isValid() diferente true 
    if (!contract.isValid()) {
        console.log(contract.isValid());
        res.status(400).send(contract.errors()).end();
        return;
    }

    repository
        .create(req.body)
        .then(x => {
            res.status(201).send({
                message: 'preduto cadastrado com sucesso!',
                data: x
            });
        }).catch(e => {
            res.status(400).send({
                messagem: 'falha ao cadastrar o produto',
                data: e
            });
        });

};

exports.put = (req, res, next) => {
    repository
        .update(req.params.id, req.body)
        .then(x => {
            res.status(201).send({
                message: 'Produto atualizado com sucesso!'
            }).catch(e => {
                res.status(400).send({
                    message: 'Falha ao atualizar produdo',
                    data: e
                });
            });
        });
};

exports.delete = (req, res, next) => {
    repository
        .delete(req.body.id)
        .then(x => {
            res.status(200).send({
                message: 'Produto removido com sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'falha ao remover o produto',
                data: e
            })
        })
};

exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(req.params.slug)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getById = (req, res, next) => {
    repository
        .getById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

//fintro por tag
exports.getByTag = (req, res, next) => {
    repository
        .getByTag(req.params.tag)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}
