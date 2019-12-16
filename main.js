// Paste the code from Firebase 
var config = {
 apiKey: "AIzaSyDOcntFdpzdwOg7kFR1UsYBQbcBYoEGq2w",
    authDomain: "ncut008-c05c9.firebaseapp.com",
    databaseURL: "https://ncut008-c05c9.firebaseio.com",
    projectId: "ncut008-c05c9",
    storageBucket: "ncut008-c05c9.appspot.com",
    messagingSenderId: "153068229166"
   
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact77');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
	address: $('.add99').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});