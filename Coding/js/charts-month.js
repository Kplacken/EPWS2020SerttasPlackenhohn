
    $("#add-btn").click(function() {
        mychart.addData({ x: new Date(2020, 04, 1), y: 35 });
        });
    
        window.onload = function () {
          var chart = new CanvasJS.Chart("chartContainer",
          {
            axisY: {
            valueFormatString: " ",
            stripLines: [{
                value: 50,
                label: "gut"
            }],        
        },
             data: [
             {
                type: "line",
        
                dataPoints: [
                { x: new Date(2020, 09, 1), y: 25, markerColor: "orange"},
                { x: new Date(2020, 10, 1), y: 30, markerColor: "orange"},
                { x: new Date(2020, 11, 1), y: 50},
                { x: new Date(2021, 00, 1), y: 15, indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
                { x: new Date(2021, 01, 1), y: 60, markerColor: "lightgreen" },
                { x: new Date(2021, 02, 1), y: 80,  indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle"},
                { x: new Date(2021, 03, 1), y: 70, markerColor: "lightgreen" }
                ]
             }
            ]
          });
      
          chart.render();
        }
    
        var cv = $("#chartContainer").get(0).getContext("2d");
    
        var mychart = new Chart(cv).Line(data);
    