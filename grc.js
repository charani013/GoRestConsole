let consoleForm = document.getElementById("consoleForm");
let requestUrlJs = document.getElementById("requestUrl");
let responseStatus = document.getElementById("responseStatus");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");
let requestMethodJs = document.getElementById("requestMethod");
let requestBodyJs = document.getElementById("requestBody");
let responseBody = document.getElementById("responseBody");


let formData = {
    requestUrl: "https://gorest.co.in/public-api/users",
    requestMethod: "POST",
    requestBody: ""
};
requestUrlJs.addEventListener("change", function(event) {
    formData.requestUrl = event.target.value;
})
requestMethodJs.addEventListener("change", function(event) {
    formData.requestMethod = event.target.value;
})
requestBodyJs.addEventListener("change", function(event) {
    formData.requestBody = event.target.value;
})

function sendJs(formData) {
    let {
        requestUrl
    } = formData;
    if (requestUrl === "") {
        requestUrlErrMsg.textContent = "Required*";
    } else {
        requestUrlErrMsg.textContent = "";
    }
}

function submitClicked(formData) {
    let {
        requestUrl,
        requestMethod,
        requestBody
    } = formData;
    options = {
        method: requestMethod,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 463eba34fc6efba19713535542f70e6631c56dd0adce0cd64f737f5709f3a43b",
        },
        body: requestBody
    }
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let responseJs = jsonData.code;
            let responseBodyJs = JSON.stringify(jsonData)
            responseStatus.value = responseJs;
            responseBody.value = responseBodyJs;
        })
}
consoleForm.addEventListener("submit", function(event) {
    event.preventDefault();
    sendJs(formData);
    submitClicked(formData);
})