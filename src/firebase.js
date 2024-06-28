//npm install firebase-tools firebase firebase-login

/*

Step1: Add Firebase SDK 


npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCksAHdzNBTEsMDI035J59T--6P-eMAgd4",
  authDomain: "react-eshop-3b030.firebaseapp.com",
  projectId: "react-eshop-3b030",
  storageBucket: "react-eshop-3b030.appspot.com",
  messagingSenderId: "920557015575",
  appId: "1:920557015575:web:bd17484d5769af9a400252",
  measurementId: "G-4VHXC0XXM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


Step2: Install Firebase CLI

To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).

Run the following npm command to install the CLI or update to the latest CLI version.

    npm install -g firebase-tools



Step3: Deploy to Firebase Hosting 


You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.
Sign in to Google
firebase login


Initiate your project

Run this command from your app's root directory:
firebase init
When you're ready, deploy your web app

Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:
firebase deploy

------------------------------------------------

use this command to install firebase
npm install --force firebase 
{this will help to install the latest firebase module even if there is any conflict / previoulsy installed }
*/
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCksAHdzNBTEsMDI035J59T--6P-eMAgd4",
    authDomain: "react-eshop-3b030.firebaseapp.com",
    projectId: "react-eshop-3b030",
    storageBucket: "react-eshop-3b030.appspot.com",
    messagingSenderId: "920557015575",
    appId: "1:920557015575:web:bd17484d5769af9a400252",
    measurementId: "G-4VHXC0XXM7"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export { db, auth };