import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzS9IxkS3ihPGPN2xCywEyKe5AXzsql5A",
  authDomain: "foodexplorer-e1dca.firebaseapp.com",
  projectId: "foodexplorer-e1dca",
  storageBucket: "foodexplorer-e1dca.appspot.com",
  messagingSenderId: "496897772561",
  appId: "1:496897772561:web:f22a173ca446b2f09475b0",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
