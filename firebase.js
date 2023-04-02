// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword ,onAuthStateChanged, createUserWithEmailAndPassword ,updateProfile} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { getFirestore, collection, setDoc, doc, getDoc, getDocs, updateDoc} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
import { getStorage, ref , uploadBytes ,getDownloadURL } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLdDI-Dt94krmMlKra6x95t3mduJaQBVI",
  authDomain: "event-3ff27.firebaseapp.com",
  projectId: "event-3ff27",
  storageBucket: "event-3ff27.appspot.com",
  messagingSenderId: "518289219631",
  appId: "1:518289219631:web:50c7455060756c52c8a6da",
  measurementId: "G-CF5MPWTRTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

//----------------- Different pages js functions ------------------------//
if(isloginpage) {
  //----------------- user login authentication ------------------------//
  document.getElementById("loginbtn").addEventListener('click',function() {
    const loginemail= document.getElementById('username').value;
    const password= document.getElementById('password').value;
    signInWithEmailAndPassword(auth,loginemail,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      location.replace("homepage/");
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.errorMessage;
      alert("Invalid ID or Password");
    })
  });


  //----------------- user signup authentication ------------------------//
  const signupform= document.querySelector('.sign-up-form')
  signupform.addEventListener('submit',(e)=>{
    e.preventDefault()

    const naam = document.getElementById('naam').value;
    const email_signup = document.getElementById('email-signup').value;
    const phn = document.getElementById('phn').value;
    const pass_sgn = document.getElementById('pass-signup').value;
    const dob = document.getElementById('dob').value;
    if(naam=="" || email_signup=="" || phn=="" || pass_sgn=="" || !dob){
      alert("Enter All Fields");
    }
    else{ 
      createUserWithEmailAndPassword(auth,email_signup,pass_sgn)
        .then( (cred)=> {
          const userRef1 =  doc(db, "users", cred.user.uid);
          //----------------- Adding user profile to user database ------------------------//
          setDoc(userRef1, {
            name: naam,
            email: email_signup,
            phone: phn,
            dob: dob,
          })
            .then(() => {
              alert("User added");
            })
            .catch((err) => {
              alert(err.message);
            })
          signupform.reset();
        })
        .catch((err)=>{
          alert(err.message);
        })
    }
  })
}
else if(ishomepage){
  
  //----------------- user id printing in homepage ------------------------//
  onAuthStateChanged(auth, (user) => {
    //----------------- session implementation ------------------------//
    if (user) {
      //----------------- ongoing events details printing ------------------------//
      const eventdb = collection(db, 'events');
      getDocs(eventdb)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            var date = Date.now();
            var start = doc.data().start; 
            var end = doc.data().end;
            console.log(date);
            console.log(start.toMillis());
            console.log(end.toMillis());
            if(date >= start.toMillis() && date <= end.toMillis()) {
      
              const main = document.querySelector("#events-ongoing");
              const card = document.createElement('div');
              card.classList = 'swiper-slide';
              const eventCard = `
              <div class="card">
              <div class="card_img">
              <img src="${doc.data().photoURL}" alt="Card Image">
              </div>
              <div class="card-content">
              <h2>${doc.data().name}</h2>
              <p>${doc.data().description}</p>
              <a class="readless" href="#">Details</a>
              </div>
              </div>
              `;
              card.innerHTML += eventCard;
              main.appendChild(card);
            }
              
            //----------------- upcoming events details printing ------------------------//
            const upcomingMain = document.querySelector("#events-upcoming");
            const upcomingCard = document.createElement('div');
            upcomingCard.classList = 'swiper-slide';
            const eventupcomingCard = `
              <div class="card1">
                <img class = "img1" src = "${doc.data().photoURL}" alt="Card Image">
              </div>
              <div class="card-content1">
                <h2 class="name">${doc.data().name}</h2>
                <p class="description">${doc.data().description}</p>
                <button class="button">View More</button>
              </div>
            `;
            upcomingCard.innerHTML += eventupcomingCard;
            upcomingMain.appendChild(upcomingCard);
          })
        })
    }
    else{
      location.replace("../index.html");
    }
  });

  //----------------- user logout authentication ------------------------//
  document.getElementById("logoutbtn").onclick = function(){
    auth.signOut();
    navigate("/");
  }
}


else if(isprofile) {
  //----------------- user id finding in profile ------------------------//
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userid = user.uid;
      const userRef = doc(db, 'users',userid);
      getDoc(userRef)
        .then((doc) => {
          if(doc.exists()){
            const data = doc.data();
            document.getElementById("name").innerHTML= data.name;
            document.getElementById("nameFront").innerHTML=data.name;
            document.getElementById("dob").innerHTML=data.dob;
            document.getElementById("email").innerHTML=data.email;
            document.getElementById("phone").innerHTML=data.phone;
            document.getElementById("description").innerHTML=data.description;
            document.getElementById("proimg").src = data.image;
          }
          else {
            console.log("NO SUCH USER EXIST");
          }
        })
        .catch((err) => {
          alert("select query error");
        });
    } 
    else{
      location.replace("../index.html");
    }
  });
  
  //----------------- user logout authentication ------------------------//
  document.getElementById("ProfileLogout").onclick = function() {
    auth.signOut();
    navigate("../index.html");
  }


  //----------------update image-----------------------------------------//
  const fileInput= document.getElementById("upload-button");
  fileInput.addEventListener("change",(event)=>{
    const file = event.target.files[0];
    const storageRef = ref(storage,`pic/${auth.currentUser.uid}/profile-image`);
    const userDocRef = doc(firestore, "users", auth.currentUser.uid);
    uploadBytes(storageRef, file).then(() => {
      // console.log("File uploaded successfully!");
      getDownloadURL(storageRef).then((url) => {
        // console.log("File download URL:", url);
        updateDoc(userDocRef, {
          image: url
        }).then(() => {
          // console.log("User profile image updated successfully!");
          location.reload();
        }).catch((error) => {
          // console.error("Error updating user image:", error);
          alert(error.message);
        });
      }).catch((error) => {
        // console.error("Error getting file download URL:", error);
        alert(error.message);
      });
    }).catch((error) => {
      // console.error("Error uploading file:", error);
      alert(error.message);
    });
  });
  


}