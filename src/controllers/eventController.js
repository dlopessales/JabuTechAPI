const EventModel = require('../model/event')

exports.post = (req, res, next) => {

  event = new EventModel(
      req.body
    )
    event.save().then(doc => {
      res.status(201).send(doc);
    })
    .catch(err => {
      res.status(501).send(err);
    })

};
exports.put = (req, res, next) => {
  const getId = req.params.id;
 
  EventModel.findOneAndUpdate({_id: getId}, req.body,{upsert:false}, function (err, doc) {
    if (err) 
      res.status(501).send(err);
    else
      res.status(200).send();
  });
};

exports.delete = (req, res, next) => {
  const getId = req.params.id;
  EventModel.deleteOne({ _id: getId}) 
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(501).send(err);
    })
};

exports.get = (req, res, next) => {
    const getId = req.params.id;
    EventModel.find({ _id: getId})
      .populate("admins")
      .then(doc => {
        res.status(200).send(doc);
      })
      .catch(err => {
        res.status(501).send(err);
      })
    
};


exports.getAll = (req, res, next) => {
  EventModel.find() 
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(501).send(err);
    })
  
};
