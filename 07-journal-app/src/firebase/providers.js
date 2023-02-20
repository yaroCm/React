import { GoogleAuthProvider } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = GoogleAuthProvider;

export const singInWithGoogle=async ()=>{
    try{
        const result =await singInWithPopup(FirebaseAuth,googleProvider);
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        console.log('credentials', credentials);
    }catch(error){
        console.log('error', error);
    }
}