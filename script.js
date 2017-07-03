function callback(data){
    data = data.data.features;
function initialize(){
var map = new google.maps.Map(document.getElementById('main'), {
          zoom: 1,
          center: {lat:80.00, lng:80.00}
});

for(let i of data){
    addMarker(i);
}

function addMarker(props){
    var marker = new google.maps.Marker({
        position:{lat:props.geometry.coordinates[1],lng:props.geometry.coordinates[0]},
        map:map
    });
}

}

google.maps.event.addDomListener(window, 'load', initialize);
}
axios.get('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json').then(callback);