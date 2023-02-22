const { collection, addDoc } =  require("firebase/firestore"); 
import  { db } from "./firebaseConfig";

const yy = async() => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}

yy()



