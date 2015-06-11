function drawVisualization() {
    
    var options = {
        title: null,
        width:200,
        height:100,
        slices: {
            0: { color: '#7ECEFD' },
            1: { color: 'transparent'}
        }
    };
	var data = google.visualization.arrayToDataTable([
		['leguage', 'nivel'],
		['javascript', 7],
        ['',3]
	]);
    
    var data2 =  google.visualization.arrayToDataTable([
		['leguage', 'nivel'],
		['html', 8],
        ['',2]
	]);
    
    var data3 =  google.visualization.arrayToDataTable([
		['leguage', 'nivel'],
		['css', 8],
        ['',2]
	]);
    
    var g3 = new google.visualization.PieChart(document.querySelector('#css'));
	g3.draw(data3,options);
    var g2 = new google.visualization.PieChart(document.querySelector('#html'));
	g2.draw(data2,options);
    new google.visualization.PieChart(document.querySelector('#javascript')).
	draw(data,options);
}

google.setOnLoadCallback(drawVisualization);