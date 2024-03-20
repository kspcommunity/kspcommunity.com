function uploadFiles(event) {
  event.preventDefault();

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const imagesInput = document.getElementById("images");
  const craftInput = document.getElementById("craft");

  if (titleInput.value === "" || titleInput.value === undefined) {
    return alert("Please enter a title.");
  } else if (descriptionInput.value === "" || descriptionInput.value === undefined) {
    return alert("Please enter a description.");
  } else if (imagesInput.files.length < 1) {
    return alert("Please select images to upload.");
  } else if (craftInput.files.length < 1) {
    return alert("Please select a craft file to upload.");
  } else if (craftInput.length > 1) {
    return alert("Please select only one craft file to upload.");
  } else if (craftInput.files[0].name.endsWith('.craft') === false) {
    return alert("Please select a .craft file to upload.");
  } else {
    const formData = new FormData();
    formData.append("title", titleInput.value);
    formData.append("description", descriptionInput.value);
    for (let i = 0; i < imagesInput.files.length; i++) {
      formData.append("images[]", imagesInput.files[i]);
    }
    formData.append("craft", craftInput.files[0]);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/uploadfiles", true);
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
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("uploadButton").addEventListener("click", uploadFiles);
});