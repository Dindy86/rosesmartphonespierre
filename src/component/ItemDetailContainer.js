import React from 'react'
import {smartphonesData} from '../data/smartphonesData.js'
import {useState,useEffect } from 'react';
import ItemDetail from './ItemDetail.js';

const getSmartphonesData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(smartphonesData[0]);
    },2000)
  })
}

const  ItemDetailContainer = ({titulo}) => {
  const [smartphoneDetail, setSmartphoneDetail] = useState({});
  
  useEffect(()=>{
    getSmartphonesData().then((data)=>{
      setSmartphoneDetail(data);
    })
  },[])

  return (
    <div className="text-center m-5">
      <h1 className="text-2xl text-red-700 text-center font-semibold m-4">{titulo}</h1>
      <ItemDetail smartphoneDetail={smartphoneDetail}/>
    </div>
  )
}

export default ItemDetailContainer;