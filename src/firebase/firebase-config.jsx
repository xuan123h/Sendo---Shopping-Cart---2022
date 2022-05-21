import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  // apiKey: "AIzaSyDS0i-OfrWl-HUpwCGUT4zt6xgcExeyFcY",
  // authDomain: "fptshop-eaa55.firebaseapp.com",
  // projectId: "fptshop-eaa55",
  // storageBucket: "fptshop-eaa55.appspot.com",
  // messagingSenderId: "470736680462",
  // appId: "1:470736680462:web:777258dc80ed17fdeeae5f",
  apiKey: "AIzaSyDiwulM5WprWP9_R_0Sn-ENBu7wdghTx2A",
  authDomain: "sendo-441fc.firebaseapp.com",
  projectId: "sendo-441fc",
  storageBucket: "sendo-441fc.appspot.com",
  messagingSenderId: "229142945048",
  appId: "1:229142945048:web:6443db0a91167f4f8e526d",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
