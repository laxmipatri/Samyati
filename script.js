// Make an AJAX request to fetch the JSON response from your testgpt.py endpoint
const xhr = new XMLHttpRequest();
xhr.open('GET', '/C:/CodeFestWorkspace/in_python/testgpt.py', true);

xhr.onload = function () {
  if (xhr.status === 200) {
    // Assuming you have the JSON response stored in 'xhr.responseText'
    const jsonResponse = JSON.parse(xhr.responseText);
    renderJSONResponse(jsonResponse);
  }
};

xhr.send();

function renderJSONResponse(jsonResponse) {
  // Assuming you have a div element with the id 'json-container' in your HTML file
  const jsonContainer = document.getElementById('json-container');
  jsonContainer.innerText = JSON.stringify(jsonResponse, null, 2);
}

