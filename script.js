function callback(data){
    data = data.data.features;
function initialize(){
var map = new google.maps.Map(document.getElementById('main'), {
          zoom: 1,
          center: {lat:80.00, lng:80.00}
});

var dataCopy=JSON.parse(JSON.stringify(data));
for(let i in dataCopy){
    if(dataCopy[i].geometry != null){
    addMarker(dataCopy[i]);
}
}
function addMarker(props){
    var marker = new google.maps.Marker({
        position:{lat:props.geometry.coordinates[1],lng:props.geometry.coordinates[0]},
        map:map
    });
    var info = new google.maps.InfoWindow({
        content: "Name: "+props.properties.name+'<br/>Mass: '+props.properties.mass+'<br/>Year: '+props.properties.year+'<br/>Fall: '+props.properties.fall
    });
    marker.addListener('click',function(){
        info.open(map,marker)
    });
}

}

google.maps.event.addDomListener(window, 'load', initialize);
}
axios.get('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json').then(callback);