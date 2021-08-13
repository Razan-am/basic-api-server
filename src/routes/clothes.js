'use strict';

const express = require ('express');
const router = express.Router();
const {Clothes} = require('../models/index');

router.get ('/status',(req,res)=>{
  res.send({
    domain:'https://basic-api-ser.herokuapp.com/',
    status:'running',
    port:'3000',
  });
});

router.get('/clothes',getAllRecords);
router.get('/clothes/:id',getOneRecord);

router.post('/clothes',createRecord);
router.put('/clothes/:id',updateRecord);
router.delete('/clothes/:id',deleteRecord);


async function getAllRecords(req,res){
  let getClothes = await Clothes.findAll();
  res.status(200).json(getClothes);
}

async function getOneRecord(req,res){
  let id =  parseInt(req.params.id);
  let getOne = await Clothes.findOne({ where: {id:id}});
  res.status(200).json(getOne);
}

async function createRecord(req,res){
  let newClothes = req.body;
  console.log(Clothes);
  let creatClothes = await Clothes.create(newClothes);
  res.status(200).json(creatClothes);

}

async function updateRecord(req,res){
  let id = parseInt(req.params.id);
  let obj = req.body;
  let findClothes =  await Clothes.findOne({ where: {id:id}});
  let updateClothes = await findClothes.update(obj);
  res.status(200).json(updateClothes);
}

async function deleteRecord(req,res){
  let id = parseInt(req.params.id);
  let deleteClothes = await Clothes.destroy({where: {id:id}});
  res.status(204).json(deleteClothes);
}

module.exports =router;