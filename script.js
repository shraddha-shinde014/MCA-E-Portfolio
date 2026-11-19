
// Upload Technical Reports and Projects
function uploadFile(inputId, listId) {

    const fileInput = document.getElementById(inputId);
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file first!");
        return;
    }

    addFile(file, listId, file.name);

    fileInput.value = "";
}

// Upload Technical Reports
function uploadReport() {

    const title = document.getElementById("reportTitle").value;
    const subject = document.getElementById("reportSubject").value;
    const fileInput = document.getElementById("reportFile");
    const file = fileInput.files[0];

    if (title === "" || subject === "" || !file) {
        alert("Please fill all details and select a file!");
        return;
    }

    const reportName = title + " - " + subject;

    addFile(file, "reportList", reportName);

    document.getElementById("reportTitle").value = "";
    document.getElementById("reportSubject").value = "";
    fileInput.value = "";

    alert("Technical Report Uploaded Successfully!");
}

// Upload Practicals
function uploadPractical() {

    const name = document.getElementById("practicalName").value;
    const fileInput = document.getElementById("practicalFile");
    const file = fileInput.files[0];

    if (name === "" || !file) {
        alert("Please enter practical name and select a file!");
        return;
    }

    addFile(file, "practicalList", name);

    document.getElementById("practicalName").value = "";
    fileInput.value = "";
}


// Display Uploaded Files
function addFile(file, listId, displayName) {

    const list = document.getElementById(listId);

    const fileURL = URL.createObjectURL(file);

    const item = document.createElement("div");
    item.className = "file-item";

    const name = document.createElement("span");
    name.textContent = displayName;

    const viewLink = document.createElement("a");
    viewLink.href = fileURL;
    viewLink.target = "_blank";
    viewLink.textContent = "View / Download";

    item.appendChild(name);
    item.appendChild(viewLink);

    list.appendChild(item);
}
