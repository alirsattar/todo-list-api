const express = require('express');
const router  = express.Router();
const Task = require('../models/task')

/* GET home page */
router.get('/tasks', (req, res, next) => {
  Task.find()
  .then((allTheTasks) =>{
    res.json(allTheTasks)
  })
  .catch((err)=>{
    res.json(err)
  })
});

router.post('/tasks/create', (req, res, next)=>{
  Task.create({
    title: req.body.title,
    description: req.body.description,
    doneYet: req.body.doneYet
  })
  .then((response)=>{
    res.json(response)
  })
  .catch((err)=>{
    res.json(err)
  })
})




/// edit task route here

router.post('/tasks/edit/:id', (req, res, next)=>{
  const theId = req.params.id;
  const theUpdatedTask = {
    title: req.body.title,
    description: req.body.description,
    doneYet: req.body.doneYet
  };
  console.log(theUpdatedTask);
  Task.findByIdAndUpdate(theId, theUpdatedTask)
  .then((theNowChangedTask) =>{
    res.json(theNowChangedTask)
  })
  .catch((err)=>{
    res.json(err);
  });
});


// delete task route

router.delete('/tasks/delete/:id', (req, res, next)=>{
  const theId = req.params.id;
  
  Task.findByIdAndRemove(theId)
  .then((theNowDeletedTask) =>{
    res.json(theNowDeletedTask)
  })
  .catch((err)=>{
    res.json(err)
  })
})






/// task details route here 
router.get('/tasks/:id', (req, res, next) =>{
  const theId = req.params.id
  Task.findById(theId)
  .then((theTask) =>{
    res.json(theTask)
  })
  .catch((err)=>{
    res.json(err)
  })
})

module.exports = router;
