var classData = d3.json("classData.json");

classData.then(function(data){
  var quizes = createList(data, 1)

    var day = 1;
    console.log(data);
    drawChart(quizes, day)

    var days = getDays(data)
    console.log(days)

    createDayButtons(days)
    createButtonText(days)


/*var createDayButtons = function(days){
    svg = d3.select('#days')
            .attr("width", 800)
            .attr("height", 200);

            boxWidth = 30
            boxHeight = 15

            svg.selectAll('rect')
              .data(days)
              .enter()
              .append("rect")
              .attr('x', function(d, i){
                return i*boxWidth + 10
              })
              .attr('y', function(d){
                return boxHeight
              })
              .attr('width', boxWidth)
              .attr('height', boxHeight)

            svg.append('text')
            .data(days)
            .enter()
            .attr('x', function(d, i){
              return i*boxWidth + 10
            })
            .attr('y', function(d){
              return boxHeight
            })
            .attr('width', boxWidth)
            .attr('height', boxHeight)
            .text(function(d){
              return d
            })

days = getDays(data)
console.log(days)
buttons = createDayButtons(days)

  var quizes = createList(data, 1)

    var day = 1;
    console.log(data);
    drawChart(quizes, day)





var createList=function(data, day){
  var quizes=[]
  data.forEach(function(d){
    d.quizes.forEach(function(d){
      if (d.day===day)
      {quizes.push(d.grade)
      }
    })})

  return quizes
}



*/
})

var getDays=function(data){
  var days=[]
    data[0].quizes.forEach(function(d){
      {days.push(d.day)
        }
    })

  return days
  }

  var createDayButtons = function(days){
      svg = d3.select('#days')
              .attr("width", 1000)
              .attr("height", 50);

              boxWidth = 15
              boxHeight = 15

              svg.selectAll('rect')
                .data(days)
                .enter()
                .append("rect")
                .attr('x', function(d, i){
                    return (i*boxWidth) + 10*i
                })
                .attr('y', function(d){
                  return boxHeight
                })
                .attr('width', boxWidth)
                .attr('height', boxHeight)
}

var createButtonText = function(days){
            svg = d3.select('#days')

                    boxWidth = 15
                    boxHeight = 15
              svg.selectAll("text")
              .data(days)
              .enter()
              .append("text")
              .text(function(d,i){
                return d})
              .attr('x', function(d, i){
                console.log(d)
                return i*boxWidth + i*10

              })
              .attr('y', function(d){
                return boxHeight+12



              })
              .attr('fill','white')
            }

var createList=function(data, day){
  var quizes=[]
  data.forEach(function(d){
    d.quizes.forEach(function(d){
      if (d.day===day)
      {quizes.push(d.grade)
      }
    })})

  return quizes
}
var drawChart = function(classData, day){

    var screen = {
      width: 500,
      height: 400
    }

    var margin = {
      left: 50,
      right: 50,
      top: 50,
      bottom: 100
    }




//var allQuizes = []
/*var getAllQuizes  = function(penguinData, day){
  console.log(penguinData.quizes.day)
  if (day === penguinData.quizes.day){
        return penguinData.quizes.grade
  }
}*/


var width = screen.width - margin.left - margin.right
var height = screen.height - margin.top - margin.bottom

var bucketNum = 11
var barWidth = width/bucketNum

var yScale=d3.scaleLinear()
    .domain([0,23])
    .range([height, 0]);

var xScale=d3.scaleLinear()
    .domain([0,11])
    .nice()
    .range([0, width]);

//var yScale=d3.scaleLinear()

var binMaker=d3.histogram()
    .domain(xScale.domain())
    .thresholds(xScale.ticks(10))

var bins=binMaker(classData);

console.log(bins)



var svg = d3.select("#chart")
.attr("width", screen.width)
.attr("height", screen.height)
svg.selectAll('rect')
  .data(bins)
  .enter()
  .append("rect")
  .attr('x', function(d, i){
    return (margin.left-barWidth/2) + xScale(d.x0)
  })
  .attr('y', function(d){
    return yScale(d.length)
  })
  .attr('width', barWidth)
  .attr('height', function(d){
    return height - yScale(d.length)
  })
  .attr("fill", "blue")



var xAxis = d3.axisBottom(xScale);
    svg.append('g')
    .attr('id', 'xAxis')
    .call(xAxis)
    .attr('transform', 'translate('+margin.left+','+(screen.height-margin.bottom-margin.top)+')')

var yAxis = d3.axisLeft(yScale);
    svg.append('g')
    .call(yAxis)
    .attr('transform', 'translate('+margin.left+','+(0)+')')
    .attr()
}
