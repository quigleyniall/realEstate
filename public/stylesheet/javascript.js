

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}
// function initMap() {
//     var myLatLng = {lat:body.response.listings[0].latitude,lng:body.response.listings[0].longitude}
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 15,
//       center: myLatLng
//     });
//
//     for(let i=0; i<body.response.listings.length; i++){
//       let LatLng = {lat:body.response.listings[i].latitude,lng:body.response.listings[i].longitude}
//       marker(LatLng)
//     }
//   }
//   function marker(myLatLng){
//     var marker = new google.maps.Marker({
//       position: myLatLng,
//       map: map,
//       title: 'Hello World!'
//     });
//   }
