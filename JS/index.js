var bookmarkName = document.getElementById("bookmarkName")
var website = document.getElementById("websiteUrl")
var subBtn = document.getElementById("sub-btn")
var siteContainer = [];

if (localStorage.getItem("site") == null) {
    siteContainer = [];
}
else {
    siteContainer = JSON.parse(localStorage.getItem("site"))
    displaysite()
}


function submitWebsite() {
    var bookmark = {
        siteName: bookmarkName.value,
        siteUrl: website.value,
    }
    siteContainer.push(bookmark)
    displaysite()
    clear()
    localStorage.setItem("site", JSON.stringify(siteContainer))
    console.log(siteContainer);
}

function clear() {
    var bookmark = {
        siteName: bookmarkName.value = null,
        siteUrl: website.value = null,
    }
}
function displaysite() {
    var tableBody = "";
    // var arrIndex = i
    for (i = 0; i < siteContainer.length; i++) {
        tableBody += `<tr>
        <th>${i + 1}</th>
        <th>${siteContainer[i].siteName}</th>
        <th><a onclick="visitSite(${i})" id="visit" target="_blank"><button class="btn" id="btn-visit"><i class="fa-solid fa-eye"></i> visit</button></a></th>
        <th><button onclick="deleteWebsite(${i})" class="btn btn-danger" id="btn-delete"><i class="fa-solid fa-trash-can"></i> Delete</button></th>
</tr>`
    }

    document.getElementById("table-content").innerHTML = tableBody;
}

function deleteWebsite(deletedIndex) {
    siteContainer.splice(deletedIndex, 1)
    localStorage.setItem("site", JSON.stringify(siteContainer))
    displaysite()

}

function visitSite(siteIndex) {
    var webUser = siteContainer[siteIndex].siteUrl;
    window.open(`${webUser}`)

}

function validateInputes(element) {
    var regex = {
        bookmarkName: /^[a-zA-Z0-9_-]{3,15}$/,
        websiteUrl: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/,
    }
    if (regex[element.id].test(element.value) == true) {
        // console.log("match");
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        // subBtn.removeAttribute("disabled", "button")
    }
    else {
        // console.log("not match");
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        // subBtn.setAttribute("disabled", "button")
    }
}


// another solution to make the button disabled if the user
//  entered one of the inputs in invalid way


// function validateInputes(element){
//     var regex = {
//         bookmarkName : /^[a-zA-Z0-9_-]{3,15}$/,
//         websiteUrl : /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/,
//     }
//     if(regex["bookmarkName"].test(element.value)== true && regex["websiteUrl"].test(element.value)== true)
//         {
// // console.log("match");
// element.classList.add("is-valid");
// element.classList.remove("is-invalid");
// subBtn.removeAttribute("disabled", "button")
//     }
//     else{
//         // console.log("not match");
//         element.classList.add("is-invalid");
//         element.classList.remove("is-valid");
//         subBtn.setAttribute("disabled", "button")
//     }
// }

