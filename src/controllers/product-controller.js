const mongoose = require('mongoose');
const Product = mongoose.model('Product');
exports.get = (req, res, next) => {
    Product
        //    active so traz  apelios indicados
        .find({ active: true }, 'title price slug')
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
                messagem: 'falha ao cadastrar o produto',
                data: e
            });
        });

};

exports.put = (req, res, next) => {
    Product
        .findByIdAndUpdate(req.params.id,{
            //dados que seram salvos
            $set:{
                title:req.body.title,
                description:req.body.description,
                price: req.body.price,
                slug: req.body.slug
            }
        }).then(x=> {
            res.status(201).send({
                message:'Produto atualizado com sucesso!'
            }).catch(e=>{
                res.status(400).send({
                    message: 'Falha ao atualizar produdo',
                    data: e
                });
            });
        });
};

exports.delete = (req, res, next) => {
    Product
        .findOneAndRemove(req.params.id)
        .then(x=>{
            res.status(200).send({
                message: 'Produto removido com sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                message:'falha ao remover o produto',
                data: e
            })
        })
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
exports.getById = (req, res, next) => {
    Product
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};
//fintro por tag
exports.getByTag = (req, res, next) => {
    Product
        .find({
            tags: req.params.tag,
            active: true
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}
