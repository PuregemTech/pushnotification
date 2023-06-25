App.controller('home', function (page) {
    // put stuff here
    
  });

  App.controller('about', function (page) {
    // put stuff here
  });

  App.controller('cv', function (page) {
    // put stuff here
  });

  try {
    App.restore();
  } catch (err) {
    App.load('home');
  }

  //Camera js code
document.getElementById("cameraTakePicture").addEventListener 
   ("click", cameraTakePicture); 

   function cameraTakePicture() { 
    navigator.camera.getPicture(onSuccess, onFail, {  
       quality: 50, 
       destinationType: Camera.DestinationType.DATA_URL 
    });  
    
    function onSuccess(imageData) { 
       var image = document.getElementById('myImage'); 
       image.src = "data:image/jpeg;base64," + imageData; 
    }  
    
    function onFail(message) { 
       alert('Failed because: ' + message); 
    } 
 }

//Geolocation js code
document.getElementById("getPosition").addEventListener("click", getPosition);
document.getElementById("watchPosition").addEventListener("click", watchPosition);


function getPosition() {
    var options = {
       enableHighAccuracy: true,
       maximumAge: 3600000
    }
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
 
    function onSuccess(position) {
       alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
    };
 
    function onError(error) {
       alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    }
 }
 
 function watchPosition() {
    var options = {
       maximumAge: 3600000,
       timeout: 3000,
       enableHighAccuracy: true,
    }
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
 
    function onSuccess(position) {
       alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
    };
 
    function onError(error) {
       alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
    }
 }


 // Get Token
// This function will return null if the token has not been established yet.
FCMPlugin.getToken(function(token){
   alert(token);
 });
 
 // Receive Refresh Token
 // This callback will be fired every time a new token is generated, including the first time.
 FCMPlugin.onTokenRefresh(function(token){
   alert( token );
 });
 
 // Subscribe to topic
 FCMPlugin.subscribeToTopic('topic');
 
 // Unsubscribe to topic
 FCMPlugin.subscribeToTopic('topic');
 
 // Reveice Push Notifiction Data
 FCMPlugin.onNotification(function(data){
   if(data.wasTapped){
    //Notification was received on device tray and tapped by the user.
    alert( JSON.stringify(data) );
   }else{
    //Notification was received in foreground. Maybe the user needs to be notified.
    alert( JSON.stringify(data) );
   }
 });
 