const ProductModel = require('../model/product')

exports.post = (req, res, next) => {

  product = new ProductModel(
      req.body
    )
    
    product.save().then(doc => {
      res.status(201).send(doc);
    })
    .catch(err => {
      res.status(501).send(err);
    })
    
};
exports.put = (req, res, next) => {
  const getId = req.params.id;
 
  ProductModel.findOneAndUpdate({_id: getId}, req.body,{upsert:false}, function (err, doc) {
    if (err) 
      res.status(501).send(err);
    else
      res.status(200).send();
  });
};

exports.delete = (req, res, next) => {
  const getId = req.params.id;
  ProductModel.deleteOne({ _id: getId}) 
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(501).send(err);
    })
};

exports.get = (req, res, next) => {
    const getId = req.params.id;
    ProductModel.find({ _id: getId})
      //.populate("event")
      .then(doc => {
        res.status(200).send(doc);
      })
      .catch(err => {
        res.status(501).send(err);
      })

};

exports.getAll = (req, res, next) => {
  ProductModel.find() 
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(501).send(err);
    })
  
};

exports.getByEvent = (req, res, next) => {
  const getEventId = req.params.id;

  console.log(getEventId);

  ProductModel.find({ event : getEventId}) 
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(501).send(err);
    })
};
