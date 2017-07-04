function callback(data){
    data = data.data.features;
    var mapG;
function initialize(){
var map = new google.maps.Map(document.getElementById('main'), {
          zoom: 1,
          center: {lat:80.00, lng:80.00},
          maxZoom:10
});
mapG = map;
var markers=[];
var dataCopy=JSON.parse(JSON.stringify(data));
for(let i in dataCopy){
    if(dataCopy[i].geometry != null){
    addMarker(dataCopy[i]);
}
else data.splice(i,1)
}


function addMarker(props){
    var marker = new google.maps.Marker({
        position:{lat:props.geometry.coordinates[1],lng:props.geometry.coordinates[0]},
        map:map,
        icon: new google.maps.MarkerImage(
    "img.png",
    null,
    null,
    null,
    new google.maps.Size(Math.sqrt(props.properties.mass)/100, Math.sqrt(props.properties.mass)/100)
)
    });
    var info = new google.maps.InfoWindow({
        content: "Name: "+props.properties.name+'<br/>Mass: '+props.properties.mass+'<br/>Year: '+props.properties.year+'<br/>Fall: '+props.properties.fall
    });
    marker.addListener('click',function(){
        info.open(map,marker)
    });
    markers.push(marker)
}
google.maps.event.addListener(map, 'zoom_changed', function() {
    var zoom = Math.pow(map.getZoom(),1)
for(var i in markers){
    var props = data[i]
    markers[i].setIcon(new google.maps.MarkerImage(
    "img.png",
    null,
    null,
    null,
    new google.maps.Size(Math.sqrt(props.properties.mass)/(100/zoom), Math.sqrt(props.properties.mass)/(100/zoom))
))
}
});
}

google.maps.event.addDomListener(window, 'load', initialize);

}
axios.get('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json').then(callback);