function onClick() {
    let content = document.getElementById("content");
    content.innerText = "hello";
}

function fetchData() {
    fetch('http://example.com/movies.json')
        .then(response => response.json())
        .then(data => console.log(data));
}