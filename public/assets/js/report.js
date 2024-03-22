async function submitReport(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  if (title.length > 64) {
      alert("Title is too long. Please keep it under 64 characters.");
      return;
  } else if (description.length > 1024) {
      alert("Description is too long. Please keep it under 256 characters.");
      return;
  } else {
    response = await fetch("/api/report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    if (response.ok) {
      alert("Report sent!");
      document.getElementById("title").value = "";
      document.getElementById("description").value = "";
    } else {
      alert("Something went wrong. Please try again later.");
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submitButton").addEventListener("click", submitReport);
});