var map;
var marker;
var loction;
    async function initMap() {
var mapHeight = window.innerHeight;
var MAP = document.getElementById('map');
MAP.style.height=mapHeight;

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 23.231154,lng :77.432393},
          zoom: 12
        });
    }
    function addMarker(lati, long){
    	marker = new google.maps.Marker({position: {lat: lati, lng: long}, map: map});
    }

function keyboardConfig(){
	document.getElementById('infoBoard').style.height="300px";
	document.getElementById('footer').style.bottom="300px";	
	document.getElementById('map').style.filter="blur(2px)"
}

var bottom = 1;
function infoTabAnnimation(){	
	var footer = document.getElementById('footer');
	var infoTab = document.getElementById('infoBoard');
	if (bottom< 480) {
		var id = setInterval(frame, 30);
		function frame() {
			if (bottom < 500) {		
				bottom*=1.2;							
				footer.style.bottom = bottom + "px";
				infoTab.style.height = bottom + "px";
				
			}else{
				document.getElementById('map').style.filter="blur(2px)"
				clearInterval(id);
			}
		}
	}

}

function hideTab() {
	var footer = document.getElementById('footer');
	var infoTab = document.getElementById('infoBoard');
	if(bottom >2){
		var id = setInterval(frame, 30);
		function frame() {
			if (bottom > 2) {
				footer.style.bottom = bottom + "px";
				infoTab.style.height = bottom + "px";
				bottom/=1.2;
			}else{
				document.getElementById('map').style.filter="blur(0px)"
				clearInterval(id);
			}
		}	
	}
}