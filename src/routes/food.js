'use strict';

const express = require ('express');
const router = express.Router();
const {Food} = require('../models/index');

router.get ('/status',(req,res)=>{
  res.send({
    domain:'https://basic-api-ser.herokuapp.com/',
    status:'running',
    port:'3000',
  });
});

router.get('/food',getAllRecords);
router.get('/food/:id',getOneRecord);

router.post('/food',createRecord);
router.put('/food/:id',updateRecord);
router.delete('/food/:id',deleteRecord);


async function getAllRecords(req,res){
  let getFood = await Food.findAll();
  res.status(200).json(getFood);
}

async function getOneRecord(req,res){
  let id =  parseInt(req.params.id);
  let getOne = await Food.findOne({ where: {id:id}});
  res.status(200).json(getOne);
}

async function createRecord(req,res){
  let newFood = req.body;
  console.log(Food);
  let creatFood = await Food.create(newFood);
  res.status(200).json(creatFood);

}

async function updateRecord(req,res){
  let id = parseInt(req.params.id);
  let obj = req.body;
  let findFood =  await Food.findOne({ where: {id:id}});
  let updateFood = await findFood.update(obj);
  res.status(200).json(updateFood);
}

async function deleteRecord(req,res){
  let id = parseInt(req.params.id);
  let deleteFood = await Food.destroy({where: {id:id}});
  res.status(200).json(deleteFood);
}

module.exports =router;