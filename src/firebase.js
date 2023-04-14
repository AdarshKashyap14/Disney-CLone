
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDFH0AHU8V112jC_M69SFv_WjqIpSUff-U",
    authDomain: "disneyplus-clone-31263.firebaseapp.com",
    projectId: "disneyplus-clone-31263",
    storageBucket: "disneyplus-clone-31263.appspot.com",
    messagingSenderId: "628755537532",
    appId: "1:628755537532:web:64fe1437b16f34c8d973f9",
    measurementId: "G-3TQP11C2BV"
  };

    const firebaseApp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp);
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();
    const storage = getStorage(firebaseApp);
    

    


    export {  auth, provider, storage };
    export default db;