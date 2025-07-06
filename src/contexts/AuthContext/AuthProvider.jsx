import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.init';
import axios from 'axios';


const googleProvider =new  GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true);
    const [user,SetUser]=useState(null);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth  ,email,password)
    }




    //google
    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

const signOutUser=()=>{
    setLoading(true);
    return signOut(auth)

}

useEffect(() =>{
const unSubscribe=onAuthStateChanged(auth,currentUser=>{
SetUser(currentUser);
setLoading(false);

if(currentUser?.email){
    const userData={email:currentUser.email};
    axios.post('http://localhost:3000/jwt',userData,{
        withCredentials:true
    })
    .then(res=>{
        console.log(res.data);
    })
    .catch(error => console.log(error));
    // axios.post('http://localhost:3000/jwt',userData)

    // .then(res=>{
    //     console.log('Token after jwt',res.data)
    //   //  const token=res.data.token;
    //    //localStorage.setItem('token',token);




    // })
    // .catch(error =>console.log(error)) 48a5f4*#hkj
}



console.log(currentUser)
})
return () =>{
    unSubscribe();
}
},[])
    const authInfo={
loading,
user,
createUser,
signOutUser,
signInWithGoogle
    }
    return (
        <AuthContext value={authInfo}>
  {children}
        </AuthContext>
    );
};

export default AuthProvider;




///***chat gpt */

