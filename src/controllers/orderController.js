const OrderModel = require('../model/order')

exports.post = (req, res, next) => {

  order = new OrderModel(
      req.body
    )
    
    order.save().then(doc => {
      res.status(201).send(doc);
    })
    .catch(err => {
      res.status(501).send(err);
    })
    
};
exports.put = (req, res, next) => {
  const getId = req.params.id;
 
  OrderModel.findOneAndUpdate({_id: getId}, req.body,{upsert:false}, function (err, doc) {
    if (err) 
      res.status(501).send(err);
    else
      res.status(200).send();
  });
};

exports.delete = (req, res, next) => {
  const getId = req.params.id;
  OrderModel.deleteOne({ _id: getId}) 
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(501).send(err);
    })
};

exports.get = (req, res, next) => {
    const getId = req.params.id;
    OrderModel.find({ _id: getId})
      .populate("event")
      .populate("consumer")
      .populate("products")
      .then(doc => {
        res.status(200).send(doc);
      })
      .catch(err => {
        res.status(501).send(err);
      })

};

exports.getAll = (req, res, next) => {
  OrderModel.find() 
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(501).send(err);
    })
  
};
