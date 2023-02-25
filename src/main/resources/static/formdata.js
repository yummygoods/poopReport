
function senddata() {
    // Use the HTTPBIN testing service to try our form post
    const targeturl = "https://httpbin.org/post";

    // Create and populate the FormData to send
    theform = document.getElementById("theform");
    data = new FormData(theform);

    // TODO: Programmatically create and send a client-side generated XML file
    filecontent = "<data>This is some XML data<info>With some info</info></data>";
    fileblob = new Blob([filecontent], { type: "text/xml" });
    data.append("datafile", fileblob);

    // TODO: Use the fetch API to submit the form directly
    fetch(targeturl, {
        method: "POST",
        body: data
    }).then(response => {
        return response.json();
    }).then(text => {
        console.log(text);
    }).catch(err => {
        console.log(err);
    });
}

window.addEventListener("load", e => {
    document.getElementById("theform").addEventListener("submit", e => {
        senddata();
        e.preventDefault();
    })
})