const UserModel = require('../model/user')

exports.post = (req, res, next) => {
  user = new UserModel(
      req.body
    )
    
    user.save().then(doc => {
      res.status(201).send(doc);
    })
    .catch(err => {
      res.status(501).send(err);
    })
    
};

exports.put = (req, res, next) => {
  const getId = req.params.id;
 
  UserModel.findOneAndUpdate({_id: getId}, req.body,{upsert:false}, function (err, doc) {
    if (err) 
      res.status(501).send(err);
    else
      res.status(200).send();
  });
};

exports.delete = (req, res, next) => {
  const getId = req.params.id;
  UserModel.deleteOne({ _id: getId}) 
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(501).send(err);
    })
};

exports.get = (req, res, next) => {
    const getId = req.params.id;
    UserModel.find({ _id: getId})
      .then(doc => {
        res.status(200).send(doc);
      })
      .catch(err => {
        res.status(501).send(err);
      })

};

exports.getAll = (req, res, next) => {
  UserModel.find() 
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(501).send(err);
    })
  
};

exports.getByEmail = (req, res, next) => {
  const getEmail = req.params.email;
  UserModel.find({ email: getEmail}) 
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(501).send(err);
    })
};
