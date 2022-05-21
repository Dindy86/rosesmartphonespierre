import React from 'react'
import {useState,useEffect } from 'react';
import ItemList from './ItemList.js';
import { useParams } from 'react-router-dom';
import {getAllItems as getSmartphonesData, getItemsByCategory} from '../data'


const ItemListContainer = ({titulo}) => {
  const {id} = useParams();
  const [smartphones, setSmartphones] = useState([]);
  
  useEffect(()=>{
  if (id === undefined) {
    getSmartphonesData(id).then((data)=>{
      setSmartphones(data);
    })
  } else {
    getItemsByCategory(id).then((data)=>{
      setSmartphones(data);
    })
  }

  },[id])

  return (
    <div className='m-12' >
      <h1 className=" text-2xl text-red-700 text-center font-semibold m-4">{titulo}</h1>
      <ItemList productos ={smartphones}></ItemList>
    </div>
  )
}

export default ItemListContainer;