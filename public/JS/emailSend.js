

function getQueryParams() {
    const params = {};
    const queryString = window.location.search.slice(1); // Supprime le ?
    console.log(queryString);
    const pairs = queryString.split('&');

    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    });

    return params;
}

const queryParams = getQueryParams();
console.log(queryParams['emailSend']);
if (queryParams['emailSend'] === "1" ) {
	document.getElementById("button-modal-email").click()
}
