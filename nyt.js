function buildURL(arr){
  console.log(arr);
  var temp = "";
  for(i in arr){
    console.log(Object.keys(arr[i]) + Object.values(arr[i]));
    if(Object.values(arr[i]) != ""){
      console.log(i + " defined");
      temp += Object.keys(arr[i]) + Object.values(arr[i]); 
    }
  }
  console.log(temp);
  return temp;
}


$(".submit").click(function(event) {
  event.preventDefault();

  console.log("clicked");

  var qArr = [];
  qArr.push({"&q=": $("#qDiv").val()});
  qArr.push({"&fq=": $("#fqDiv").val()});
  qArr.push({"&begin_date=": $("#beginDiv").val()});
  qArr.push({"&end_date=": $("#endDiv").val()});
  
  var urlEnd = buildURL(qArr);

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=85843514385446c3a7bfb8db44b3fca5" + urlEnd;

  console.log(queryURL);


  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {

    var results = response.response.docs;

    for(i in results){
      console.log(results[i]);
      console.log(results[i].multimedia[0].url);
      if(results[i].multimedia[0].url){
        $("#results").append("<a href=" + String(results[i].web_url) + " class='link' target='_blank' alt='querySearch'><img class='img-responsive' src=https://nyt.com/" + String(results[i].multimedia[0].url) + "></a>");
      }else{
        $("#results").append("<a href=" + String(results[i].web_url) + " class='link' target='_blank' alt='querySearch'><img class='img-responsive' src='https://media.tenor.com/images/af976aa211ae8a8676ad0b518887b4f9/tenor.gif'></a>");
      }
    }
  });
});
