var Dog = 0;
var Cat = 0;
var Cow = 0;
var Lion = 0;




function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_VpYPw5xN/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error ,result) {
   if (error) {
    console.error(error); } 
    else {
    console.log(result);

    random_number_r = Math.floor(Math.random() * 255 ) + 1;
    random_number_g = Math.floor(Math.random() * 255 ) + 1;
    random_number_b = Math.floor(Math.random() * 255 ) + 1;

 