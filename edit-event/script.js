const isloginpage=false;
const ishomepage=false;
const isprofile=false;
const isRegister=false;
const isHost=false;
const PageForHost=false;
const isUpdateEvent=true;
let eventImg;
const textarea = document.getElementById("textarea-input");
function imageSet(event) {
  eventImg=event.target.files[0];
}