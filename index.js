var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500,
  svgHeight = 300,
  barPadding = 10;

var barWidth = svgWidth / dataset.length;

var svg = d3.select("svg").attr("width", svgWidth).attr("height", svgHeight); //assign width height to svg container

var barChart = svg
  .selectAll("rect") // Selects all <rect> elements within the SVG
  .data(dataset) // Binds the dataset array to the <rect> elements
  .enter() // Creates a placeholder for each data point in the dataset
  .append("rect") // Appends a new <rect> element for each data point
  .attr("y", function (d) {
    return svgHeight - d; // Sets the y position of the rectangle
  })
  .attr("height", function (d) {
    return d; // Sets the height of the rectangle
  })
  .attr("width", barWidth - barPadding)
  .attr("transform", function (d, i) {
    var translate = [barWidth * i, 0]; // Calculates the translation for each rectangle
    return "translate(" + translate + ")"; // Applies the translation
  });
