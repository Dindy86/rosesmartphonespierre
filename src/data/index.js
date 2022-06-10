import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, query, where, collection, getDocs, addDoc} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};


const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);
export default firestoreDB;

export async function  getAllItems() {
  const myCollection = collection(firestoreDB, 'smartphones');
  const smartphonesSnap = await getDocs(myCollection);
  return smartphonesSnap.docs.map( doc => ({id:doc.id, ...doc.data()}));
}

export async function  getItemsByCategory(categoryId) {
  const myCollection = collection(firestoreDB, 'smartphones');
  const querySmartphones = query(myCollection, where("marca", "==", categoryId));
  const smartphonesSnap = await getDocs(querySmartphones);
  return smartphonesSnap.docs.map( doc => ({id:doc.id, ...doc.data()}));
}

export async function  getItem(id) {
  const myCollection = collection(firestoreDB, 'smartphones');
  const smartphonesRef = doc(myCollection, id);
  const smartphonesSnap = await getDoc(smartphonesRef );
  return {id:smartphonesSnap.id, ...smartphonesSnap.data()};
}

export async function  saveToFirestore(orderDatas) {
  const orderDatasCollection = collection(firestoreDB, "order");
  addDoc(orderDatasCollection, orderDatas).then( response => {
    console.log(response);
  });
}