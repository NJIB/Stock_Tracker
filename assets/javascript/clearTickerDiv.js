// Writing the data selected to the DOM
function clearTickerDiv(targetDiv) {
    console.log("tickerChartHeader" + targetDiv);
    $("#tickerChartHeader" + targetDiv).empty();
    $("#periodButtons" + targetDiv).empty();
    $("#myChart" + targetDiv).empty();
}
