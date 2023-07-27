import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKgFKv9SmvuxJaqh8yPvh2ZUbjDY4zuKU",
  authDomain: "movie-43945.firebaseapp.com",
  projectId: "movie-43945",
  storageBucket: "movie-43945.appspot.com",
  messagingSenderId: "59714368399",
  appId: "1:59714368399:web:34e36748a684b282c351fa",
  measurementId: "G-GY2S6L2BJ8",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);