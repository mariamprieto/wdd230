function setConfMessage() {
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const fullName = urlParams.get('name');

    document.getElementById("full_name").innerHTML = fullName;

}
setConfMessage();