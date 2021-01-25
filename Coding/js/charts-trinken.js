   
        window.onload = function () {
          var chart = new CanvasJS.Chart("chartTrinken",
          {
            axisY: {
            valueFormatString: " ",
            stripLines: [{
                value: 40,
                label: ""
            }],        
        },
             data: [
             {
                type: "spline",
        
                dataPoints: [
                { x: new Date(2021, 01, 15), y: 10, indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
                { x: new Date(2021, 01, 16), y: 20},
                { x: new Date(2021, 01, 17), y: 25},
                { x: new Date(2021, 01, 18), y: 22},
                { x: new Date(2021, 01, 19), y: 30, indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle"},
                { x: new Date(2021, 01, 20), y: 15},
                { x: new Date(2021, 01, 21), y: 18}
                ]
             }
            ]
          });
      
          chart.render();
        }
    
    