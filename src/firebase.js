
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDoATs5F2sXWObIt0kYXhiGYZgj5npYxB8",
  authDomain: "netflix-b2d4f.firebaseapp.com",
  projectId: "netflix-b2d4f",
  storageBucket: "netflix-b2d4f.firebasestorage.app",
  messagingSenderId: "229677132925",
  appId: "1:229677132925:web:9545eb96f560539693d514",
  measurementId: "G-LPL76EC5PG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

const signup = async (name,email,password)=>{
    try {
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,authProvider:"local",
            email,
        });
    } catch (error){
        console.log(error);
        toast.error(error.code);
    }
        
    
}

const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password) 
    } catch (error) {
        console.log(error);
        toast.error(error.code);
    }
}

const logout = () =>{
    signOut(auth);
}

export {auth,db,login,signup,logout};