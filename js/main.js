function test() {
    // FIXME:: need to test
    // <a href="sms:+19725551212?body=hellow">SMS Me</a>
    // http://stackoverflow.com/questions/4787905/sms-url-on-android
    //window.location.href="sms:+19725551212?body=hellow";
//    var sms = 'sms:+' + number + '?body=' + msg;
//    window.location.href = 'smsto:+821091510102?body=hellow';

    
    
    
    // csc-manager.csc-sim-selection
    // w-input-selector
    // com.samsung.app-selector
    //tizen.application.launch('com.samsung.app-selector', function() {
//    tizen.application.launch('csc-manager.csc-sim-test', function() {
//        com.samsung.w-call-setting
//        console.log('success launch');
//    });
    
    
    
    
    
    
//    function onListInstalledApps(applications) {
//        for (var i = 0; i < applications.length; i++)
//            console.log("ID : " + applications[i].id);
//    }
//    tizen.application.getAppsInfo(onListInstalledApps);

    
    
    
    
    //navigator.vibrate(1000);
    
    
    
    
    
    
    if (!navigator.getUserMedia)
        navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    if (!navigator.cancelAnimationFrame)
        navigator.cancelAnimationFrame = navigator.webkitCancelAnimationFrame || navigator.mozCancelAnimationFrame;
    if (!navigator.requestAnimationFrame)
        navigator.requestAnimationFrame = navigator.webkitRequestAnimationFrame || navigator.mozRequestAnimationFrame;
    
    
    // Globals
    var aCtx;
    var analyser;
    var microphone;
    if (navigator.getUserMedia) {
        navigator.getUserMedia({audio: true}, function(stream) {
            aCtx = new webkitAudioContext();
            analyser = aCtx.createAnalyser();
            microphone = aCtx.createMediaStreamSource(stream);
            microphone.connect(analyser);
            // analyser.connect(aCtx.destination);
            process();
        }, function(e) {
        });
    };
    function process(){
        setInterval(function(){
            FFTData = new Float32Array(analyser.frequencyBinCount);
            analyser.getFloatFrequencyData(FFTData);
            console.log(FFTData[0]);
            var data = ':' + FFTData[0];
            var element = document.getElementById("content");
            element.innerHTML = data;
        },500);
    }
}
