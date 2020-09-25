const Widgets = require("../models/widget.model");

module.exports = {
    index:(req,res) => {
        Widgets.find()
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    create:(req,res) => {
        Widgets.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    show:(req,res) => {
        Widgets.findOne({_id:req.params.id})
        .then(data => res.json({results:data}))
        .catch(err => res.json(err.errors))
    },
    update:(req,res) => {
        Widgets.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, useFindAndModify:false})
        .then(data => res.json({results:data}) )
        .catch(err => res.json(err.errors))
    },
    destroy:(req,res) => {
        Widgets.deleteOne({_id:req.params.id})
        .then(data => res.json({results:data}))
        .catch(err => res.json(err.errors))    
    }

}