
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAhyilq6p7twuRGFaEm-kO_-pcPFhQg8MA",
    authDomain: "pankaj-671c7.firebaseapp.com",
    databaseURL: "https://pankaj-671c7.firebaseio.com",
    projectId: "pankaj-671c7",
    storageBucket: "pankaj-671c7.appspot.com",
    messagingSenderId: "476872262003",
    appId: "1:476872262003:web:a0022d7b46a174d2cf4506",
    measurementId: "G-JB1N7SYHSW"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var firestore = firebase.firestore();

const submitBtn = document.querySelector('#submit');

let userName = document.querySelector('#userFullName');
let userEmail = document.querySelector('#userEmail');
let userFacebook = document.querySelector('#userFacebook');
let userInsta = document.querySelector('#userInsta');
let userContact = document.querySelector('#userContact');



const db = firestore.collection("contactData");

submitBtn.addEventListener('click',function(){
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userFacebookInput = userFacebook.value;
    let userInstaInput = userInsta.value;
    let userContactInput = userContact.value;


    
    db.doc().set({
        name: userNameInput,
        special: userEmailInput,
        Facebook: userFacebookInput,
        Insta: userInstaInput,
        Contact: userContactInput
    })
    .then(function(){
        console.log("Data Saved");
    })
    .catch(function(error){
        console.log(error);
    });

});
