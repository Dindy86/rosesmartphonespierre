import React from 'react'
import {useState,useEffect } from 'react';
import ItemDetail from './ItemDetail.js';
import { useParams } from 'react-router-dom';
import {getItem as getSmartphonesData} from '../data'

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