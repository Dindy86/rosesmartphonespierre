import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, query, where, collection, getDocs} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAmkqaryvRYsKch5vNM-13nbrzp1wi2PkQ",
  authDomain: "rosesmartphonesreact.firebaseapp.com",
  projectId: "rosesmartphonesreact",
  storageBucket: "rosesmartphonesreact.appspot.com",
  messagingSenderId: "36369019244",
  appId: "1:36369019244:web:bd33192bf477bb56c70349"
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