
function initMap() {
    var style = [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#263c3f' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#6b9a76' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#38414e' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#212a37' }]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9ca5b3' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#746855' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#1f2835' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#f3d19c' }]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#2f3948' }]
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#17263c' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#515c6d' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#17263c' }]
        }
    ]
    // Map1
    var ekeberg = { lat: 59.8950803, lng: 10.7741749 };
    var map1 = new google.maps.Map(document.getElementById('map1'), {
        center: ekeberg,
        zoom: 11.9,
        disableDefaultUI: true,
        styles: style
    });
    var marker = new google.maps.Marker({ position: ekeberg, map: map1 });

    // Map2
    var stavern = { lat: 59.033025, lng: 10.009618 };
    var map2 = new google.maps.Map(document.getElementById('map2'), {
        center: stavern,
        zoom: 13,
        disableDefaultUI: true,
        styles: style
    });
    var marker = new google.maps.Marker({ position: stavern, map: map2 });

    // Map3
    var woodstock = { lat: 41.675163966, lng: -74.859496562 };
    var map3 = new google.maps.Map(document.getElementById('map3'), {
        center: woodstock,
        zoom: 11.9,
        disableDefaultUI: true,
        styles: style
    });
    var marker = new google.maps.Marker({ position: woodstock, map: map3 });

    //Map4
    var trondheimSpektrum = { lat: 59.8950803, lng: 10.7741749 };
    var map4 = new google.maps.Map(document.getElementById('map4'), {
        center: trondheimSpektrum,
        zoom: 11.9,
        disableDefaultUI: true,
        styles: style
    });
    var marker = new google.maps.Marker({ position: trondheimSpektrum, map: map4 });
}

var events = document.getElementsByClassName("eventElement");
var modals = document.getElementsByClassName("modal");

for (var i = 0; i < events.length; i++) {
    let event = events[i];
    let modal = modals[i];
    let span = modal.childNodes[3].childNodes[1].childNodes[1];
    console.log(span);
    

    event.addEventListener("click", () => {
        modal.style.display = "block";
    });
    
    span.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (skrt) => {
        if (skrt.target == modal) {
            modal.style.display = "none";
        }
    });
}