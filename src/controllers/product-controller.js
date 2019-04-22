const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validator/fluent-validator');
const repository = require('../repositories/product-repository');

exports.get = async (req, res, next) => {
    var data = await repository.get();
    res.status(200).send(data);
};

exports.post = async (req, res, next) => {
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
    // async/await roda codigos assicronos como sincrono    
    try {
        await repository.create(req.body)
        res.status(201).send({
            message: 'preduto cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            messagem: 'falha ao cadastrar o produto'
        });
    }

};

exports.put = async (req, res, next) => {
    // async/await roda codigos assicronos como sincrono    
    try {
        await repository.update(req.params.id, req.body)
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao atualizar produdo'
        });
    }


};

exports.delete = async (req, res, next) => {
    // async/await roda codigos assicronos como sincrono    
    console.log(req.body.id);
    try {
        await repository.delete(req.body.id);
        
        res.status(200).send({
            message: 'Produto removido com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            message: 'falha ao remover o produto'
        });
    }

};

exports.getBySlug = async (req, res, next) => {
    try {
        var data = await repository.getBySlug(req.params.slug)
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            messagem: 'Falha ao processar sua requisição'
        });

    };
};

exports.getById = async (req, res, next) => {
    try {
        var data = await repository.getById(req.params.id)
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            messagem: 'Falha ao processar sua requisição'
        });
    }
};

//fintro por tag
exports.getByTag = async (req, res, next) => {
    try {
        const data = await repository.getByTag(req.params.tag)
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            messagem: 'Falha ao processar sua requisição'
        })
    }
}
