function showTime() {
    const now = new Date();

    document.getElementById("india").textContent =
        now.toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            dateStyle: "medium",
            timeStyle: "medium"
        });

    document.getElementById("east").textContent =
        now.toLocaleString("en-US", {
            timeZone: "America/New_York",
            dateStyle: "medium",
            timeStyle: "medium"
        });

    document.getElementById("west").textContent =
        now.toLocaleString("en-US", {
            timeZone: "America/Los_Angeles",
            dateStyle: "medium",
            timeStyle: "medium"
        });
}

showTime();
setInterval(showTime, 1000);
