Webcam.set({
    width:350,
    height:350,
    ima_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log("ml5version-"+ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/modal.json",modelLoaded);
function modelLoaded(){
    console.log("modelisloaded");
}

function check(){
    image=document.getElementById("captured_image");
    classifier.classify(image,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}