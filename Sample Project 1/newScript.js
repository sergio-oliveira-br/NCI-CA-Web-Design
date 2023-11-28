var today = new Date();
var year = today.getFullYear();
var el = document.getElementById("footerUpdate");
el.innerHTML = '<p> Copyright &copy; ' + year + '</p>';
var marker;

 function initMap() {
        var myLatLng = {lat: 53.4440735, lng: -6.2141773};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
      }