function getSearchResult(){
    var search = new XMLHttpRequest();
    search.open("POST", "http://127.0.0.1:3030/restaurant/search",true);
    search.setRequestHeader("Content-Type", "application/json");
    search.onload = function() {
        search_result_array = JSON.parse(search.responseText);
        console.log(search_result_array);
    }
    var name = document.getElementById("name").value;
    var payload = {
        name:name
    };
    search.send(JSON.stringify(payload));
}