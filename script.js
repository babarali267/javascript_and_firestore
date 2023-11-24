
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import {
     getFirestore,
     addDoc ,
     collection,
     getDocs
    
    } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)



  try{
    const docRef =  await addDoc(collection(db,"users"),{
       name: "Ansar",
       lastName : "Ali",
       born : 20101999

    })

    console.log("good");
  }catch(err){
     console.log(err);
  }

   const quertSnapshot = await getDocs(collection(db,"users"));

     quertSnapshot.forEach(elment=>{
        console.log(elment.data());
     })


