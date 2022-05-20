import React from 'react'
import {smartphonesData} from '../data/smartphonesData.js'
import {useState,useEffect } from 'react';
import ItemDetail from './ItemDetail.js';
import { useParams } from 'react-router-dom';

const getSmartphonesData = (idRequested) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const smartphoneRequested = smartphonesData.find(smartphone => smartphone.id === Number(idRequested));
      resolve(smartphoneRequested);
    },2000)
  })
}

const  ItemDetailContainer = ({titulo}) => {
  const [smartphoneDetail, setSmartphoneDetail] = useState();
  const {id} = useParams();
  
  useEffect( () => {
    getSmartphonesData(id).then((data) => {
      setSmartphoneDetail(data);
    })
  },[id])
  
  if (smartphoneDetail === undefined) {
    return(
      <div>
        <h2>Loading...</h2>
      </div>
    )
  } else {
    return (
      <div className="text-center m-5">
        <h1 className="text-2xl text-red-700 text-center font-semibold m-4">{titulo}</h1>
        <ItemDetail smartphoneDetail={smartphoneDetail}/>
      </div>
    )
  }
}

export default ItemDetailContainer;