// Insert your scripts here

// Initial Script

		var map = L.map('map', {
			scrollWheelZoom: false
		}).fitBounds([
            [42.461, -56.979],[32.536, -134.4]
            ]);

		var cloudmade = L.tileLayer("http://a.tiles.mapbox.com/v3/energy.map-461t6jk2/{z}/{x}/{y}.png", {
			//attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
			//key: 'BC9A493B41014CAABB98F0471D759707',
			//styleId: 22677
		}).addTo(map);
