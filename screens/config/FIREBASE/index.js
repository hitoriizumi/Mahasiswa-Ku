import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

firebase.initializeApp({
  apiKey: "AIzaSyATUPv4vOl3FJy9F7gbhApVFzDipf7OpNI",
  authDomain: "mahasiswakuitts-274ad.firebaseapp.com",
  databaseURL: "https://mahasiswakuitts-274ad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mahasiswakuitts-274ad",
  storageBucket: "mahasiswakuitts-274ad.appspot.com",
  messagingSenderId: "298825571118",
  appId: "1:298825571118:web:995647379e5384ba3bf8bf",
  measurementId: "G-4BGZHZESZW"
});

const FIREBASE = firebase;

export default FIREBASE;