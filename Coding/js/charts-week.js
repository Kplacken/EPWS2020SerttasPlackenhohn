   
        window.onload = function () {
          var chart = new CanvasJS.Chart("chartWeekly",
          {
            axisY: {
            valueFormatString: " ",
            stripLines: [{
                value: 40,
                label: "gut"
            }],        
        },
             data: [
             {
                type: "line",
        
                dataPoints: [
                { x: new Date(2021, 01, 15), y: 47 },
                { x: new Date(2021, 01, 16), y: 30 },
                { x: new Date(2021, 01, 17), y: 20, indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
                { x: new Date(2021, 01, 18), y: 40 },
                { x: new Date(2021, 01, 19), y: 45 },
                { x: new Date(2021, 01, 20), y: 60,  indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle"},
                { x: new Date(2021, 01, 21), y: 55}
                ]
             }
            ]
          });
      
          chart.render();
        }
    
    