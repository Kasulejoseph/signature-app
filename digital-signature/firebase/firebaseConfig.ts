const { initializeApp } = require('firebase/app');
const { getFirestore } = require("firebase/firestore");
const { collection, addDoc } =  require("firebase/firestore"); 



// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";


// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAi4KhClpWcKu7_y9os-KnRBYME9zRcXlQ',
  authDomain: 'digital-signature-cea9f.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'digital-signature-cea9f',
  storageBucket: 'digital-signature-cea9f.appspot.com',
  messagingSenderId: '743327890331',
  appId: '1:743327890331:web:2cd64c91cb3b649cef7f3e',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


// const yy = async() => {
//     try {
//         const docRef = await addDoc(collection(db, "items"), {
//           name: "Milk cartons",
//           items_group_id: '200',
//           quantity: '6',
//           status: 'pending',
//           received_by: '2F2OrQfmU6fH9LzHO6LOWh',
//           signature: '',
//           driver_id: '100'

//         });
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }

// }

// const yy = async() => {
//     try {
//         const docRef = await addDoc(collection(db, "routes"), {
//             id: 2,
//             address: "4321 Laguna",
//             delivery_date: "22-02-2023",
//             driver_id: "100",
//             items_group_id: '200',
//             phone_number: '39302820292',
//             receivers_group_id: '1',
//             stop_status: 'pending'

//         });
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }

// }

// yy()
