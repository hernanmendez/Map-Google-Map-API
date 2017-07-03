function callback(data){
function initialize(){
var map = new google.maps.Map(document.getElementById('main'), {
          zoom: 1,
          center: {lat:80.00, lng:80.00}
});
}
google.maps.event.addDomListener(window, 'load', initialize);
}
axios.get('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json').then(callback);