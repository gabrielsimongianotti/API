const ValidationContract = require('../validator/fluent-validator');
const repository = require('../repositories/customer-repository');

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, "o nome de conter no minimo 3 caracteres");
    contract.isEmail(req.body.email, 3, "o email invalido");
    contract.hasMinLen(req.body.password, 6, "a senha de conter no minimo 3 caracteres");

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
            message: 'Cliente cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            messagem: 'falha ao cadastrar o Cliente'
        });
    }

};