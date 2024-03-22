async function submitModLink(event) {
    event.preventDefault();
    const modName = document.getElementById("modName").value;
    const modLink = document.getElementById("modLink").value;
    if (modName.length > 32) {
        alert("Mod name is too long. Please keep it under 32 characters.");
        return;
    } else if (modLink.length > 256) {
        alert("Mod link is too long. Please keep it under 256 characters.");
        return;
    } else {
        response = await fetch("/api/contributemod", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ modName, modLink }),
        });
        if (response.ok) {
            alert("Thank you for your contribution!");
            document.getElementById("modName").value = "";
            document.getElementById("modLink").value = "";
        } else {
            alert("Something went wrong. Please try again later.");
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitButton").addEventListener("click", submitModLink);
});