function callback(data){
    data = data.data.features;
function initialize(){
var map = new google.maps.Map(document.getElementById('main'), {
          zoom: 1,
          center: {lat:80.00, lng:80.00}
});

var markers=[];

for(let i in data){
    if(data[i].geometry != null){
    addMarker(data[i]);
    }
}
console.log(markers)
function addMarker(props){
    var marker = new google.maps.Marker({
        position:{lat:props.geometry.coordinates[1],lng:props.geometry.coordinates[0]},
        map:map
    });

    markers.push(marker);
}

}

google.maps.event.addDomListener(window, 'load', initialize);
}
axios.get('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json').then(callback);