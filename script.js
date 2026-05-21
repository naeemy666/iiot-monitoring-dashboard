function updateData() {

    let temperature = Math.floor(Math.random() * 60);
    let humidity = Math.floor(Math.random() * 100);

    document.getElementById("temperature").innerText =
        temperature + " °C";

    document.getElementById("humidity").innerText =
        humidity + " %";

    if (temperature > 40) {

        document.getElementById("machineStatus").innerText =
            "Running - Warning";

        document.getElementById("alarmStatus").innerText =
            "High Temperature Alarm";

    } else {

        document.getElementById("machineStatus").innerText =
            "Running Normal";

        document.getElementById("alarmStatus").innerText =
            "No Alarm";
    }
}

// Update automatically every 2 seconds
setInterval(updateData, 2000);

// Run immediately when page loads
updateData();