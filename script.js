
const modelParams = {
    flipHorizontal: true,   // flip e.g for video 
    imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.95,    // confidence threshold for predictions.
    }
    
    navigator.getUserMedia = 
        navigator.getUserMedia || 
        navigator.webkitGetUserMedia ||
        navigator.moz.GetUSerMedia ||
        navigator.msGetUserMedia;

    // Select everything in html
    const video = document.querySelector("#video");
    const music = document.querySelector("#yt");
    const canvas = document.querySelector('#canvas');
    const  context = canvas.getContext('2d');
    let model;
    console.log(music.src);

    handTrack.startVideo(video).then(status => {
        if(status) {
            navigator.getUserMedia({video: {}},stream => {
                setInterval(runDetection,200);
            },
            err => console.log(err)
            );
        }
    });
    
    function runDetection() {
        model.detect(video)
            .then(predictions => {
                console.log(predictions);
                if(predictions.length===1) {
                    function changetext() {
                        document.getElementById("chill-text").innerHTML = "Happy Chilling!!";
                    }
                    music.src = "https://www.youtube.com/embed/lTRiuFIWV54?autoplay=1";
                    console.log(music.src);

                }
                else if(predictions.length===2) {
                    music.src = "https://www.youtube.com/embed/lTRiuFIWV54";
                    console.log(music.src);
                   
                }
            });
    }


    handTrack.load(modelParams).then(lmodel => {
        model=lmodel;
        });