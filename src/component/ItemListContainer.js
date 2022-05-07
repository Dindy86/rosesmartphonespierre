import React from 'react'
import {smartphonesData} from '../data/smartphonesData.js'
import {useState,useEffect } from 'react';
import ItemList from './ItemList.js';
import { useParams } from 'react-router-dom';

const getSmartphonesData = (idRequested) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log(idRequested);
      if (!idRequested) {
        return resolve(smartphonesData);
      }
      
      const dataSmartphones = smartphonesData.filter( smartphones => {
        return smartphones.marca === idRequested
      });
      
      resolve(dataSmartphones);
    },2000)
  })
}

const ItemListContainer = ({titulo}) => {
  const {id} = useParams();
  const [smartphones, setSmartphones] = useState([]);
  
  useEffect(()=>{
    getSmartphonesData(id).then((data)=>{
      setSmartphones(data);
    })
  },[id])

  return (
    <div className='m-12' >
      <h1 className=" text-2xl text-red-700 text-center font-semibold m-4">{titulo}</h1>
      <ItemList productos ={smartphones}></ItemList>
    </div>
  )
}

export default ItemListContainer;