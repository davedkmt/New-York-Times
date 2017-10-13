function buildURL(arr){
  console.log(arr);
  var temp = "";
  for(var i in arr){
    console.log(Object.keys(arr[i]) + Object.values(arr[i]));
    if(Object.values(arr[i]) != ""){
      console.log(i + " defined");
      temp += Object.keys(arr[i]) + Object.values(arr[i]);
    }
  }
  console.log(temp);
  return temp;
}


$("button").on("click", function() {
      var qArr = [];
      qArr.push({"?q=": "austria"});
      qArr.push({"?fq=": $("#fqDiv").val()});
      qArr.push({"?begin_date=": $("#beginDiv").val()});
      qArr.push({"?end_date=": $("#endDiv").val()});

      var urlEnd = buildURL(qArr);

      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + urlEnd + "?api-key=85843514385446c3a7bfb8db44b3fca5";

      console.log(queryURL);

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {

        console.log(response);

      });
});
