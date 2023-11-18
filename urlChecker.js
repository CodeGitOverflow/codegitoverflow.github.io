var url = window.location.href;
if(url.endswith(".json")){ 
  window.location.assign("404.html");
  alert("JSON detected!");
  //
}
