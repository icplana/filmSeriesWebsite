// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ1mqUNyLeB0rJEVwUxncXRcK2f2hY36Y",
  authDomain: "learning-marvel.firebaseapp.com",
  projectId: "learning-marvel",
  storageBucket: "learning-marvel.appspot.com",
  messagingSenderId: "474470298141",
  appId: "1:474470298141:web:375fcd066713459c5b8cf4",
  measurementId: "G-6C88LDBP1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth( app )

export const registerEmail = async ( email, password ) => {

    const user = createUserWithEmailAndPassword( auth, email, password )
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    
        return user
    })
    .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        return error
        // ..
    });

    const resp = await user.then()
    return resp
}

export const signInEmail = async ( email, password ) => {
    const user = signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    return user
  })
  .catch((error) => {
    
    return error
  });


  const resp = user.then()

  return resp
}

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
  
    const user = signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
  
      return user
    }).catch((error) => {
      console.log({error})
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      const email = error.customData.email;
      // // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
  
      return error
    })
  
    const resp = user.then()
    return resp
<<<<<<< HEAD

  } 

  



  // BBDD

  const FirebaseDB = getFirestore( app )


  export const getFavoritesDB = async ( userId ) => {
  
    const resp = await getDoc( doc( FirebaseDB, `${ userId }/favorites` ))
    

    if ( resp._document !== null ){
      const data = resp._document.data.value.mapValue.fields.favorites.mapValue.fields
      if ( data !== undefined ){
        let favorites = {}
        for( let [ key, value ] of Object.entries( data )){
          favorites = { ...favorites, [ key ]: value.arrayValue.values.map( each => each.integerValue ) || [] }
        }
        return favorites
      }
    }
  
    return { comics: [], characters: [], creators: [], events: [], series: [], stories: []}
    
  }
  

  export const updateFavoriteDB = async ({ userId, favoritesList }) => {

    const newDoc = doc(FirebaseDB, `${ userId }` , 'favorites' )
    
  
    await setDoc( newDoc, {
       favorites: favoritesList 
    })
  }
=======
  } 
>>>>>>> 2e604f3 (solving merging issues from cloudhub)
