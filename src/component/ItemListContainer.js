import React from 'react'
import {smartphonesData} from '../data/smartphonesData.js'
import {useState,useEffect } from 'react';
import ItemList from './ItemList.js';

const getSmartphonesData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(smartphonesData);
    },2000)
  })
}

const ItemListContainer = ({titulo}) => {
  const [smartphones, setSmartphones] = useState([]);
  
  useEffect(()=>{
    getSmartphonesData().then((data)=>{
      setSmartphones(data);
    })
  },[])

  return (
    <div>
      <h1 className="text-2xl text-red-700 text-center font-semibold m-4">{titulo}</h1>
      <ItemList productos ={smartphones}></ItemList>
    </div>
  )
}

export default ItemListContainer;