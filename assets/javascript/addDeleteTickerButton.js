function addDeleteTickerButton(chartsDivRef) {

    // $("#periodButtons").html("");

    addPeriodButton(chartsDivRef);

    function addPeriodButton(chartsDivRef) {

        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var newDelBtn = $("<button>");
        //Adding a Bootstrap class for formatting only
        newDelBtn.addClass("btn btn-danger");
        // Adding a class for click recognition
        newDelBtn.addClass("deleteBtn");
        // Add data attribute to log which chartsDiv you are working in
        newDelBtn.attr("data-chartsdivref", chartsDivRef);
        // Providing the button's text with a value of the gif search at index i
        newDelBtn.text('Delete');
        // Adding the button to the HTML
        $("#tickerChartHeader" + chartsDivRef).append(newDelBtn);
    }
}

