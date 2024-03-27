function uploadCraft(event) {
  event.preventDefault();

  const craftInput = document.getElementById("craft");

  if (craftInput.files.length < 1) {
    return alert("Please select a craft file to upload.");
  } else if (craftInput.length > 1) {
    return alert("Please select only one craft file to upload.");
  } else if (craftInput.files[0].name.endsWith('.craft') === false) {
    return alert("Please select a .craft file to upload.");
  } else {
    const formData = new FormData();
    formData.append("craft", craftInput.files[0]);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/uploadcraft", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Handle successful response from the server
          console.log("Uploaded successfully!");
        } else {
          // Handle error response from the server
          console.error("Failed to upload files.");
        }
      }
    };
    xhr.send(formData);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const uid = xhr.responseText;
        window.location.href = `/postcraft/${uid}`;
      } else {
        console.error("Failed to get uid.");
      }
    };
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("uploadButton").addEventListener("click", uploadCraft);
});