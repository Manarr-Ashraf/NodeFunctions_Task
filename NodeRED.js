function processMessage(msg) {
    if (msg.temperature > 30) {
        msg.status = "High";
    } else {
        msg.status = "Normal";
    }
    return msg;
}

// Example usage
let sensorData = { temperature: 20, humidity: 45, device: "sensor1" };
console.log(processMessage(sensorData));


function manipulateString(str) {
    if (str.length > 10) {
        return str.toUpperCase() + " (truncated)";
    }
    return str.toUpperCase();
}

// Example usage
console.log(manipulateString("Hello !!"));


function filterSensorData(reading, threshold) {
    return reading >= threshold ? reading : null;
}

// Example usage
console.log(filterSensorData(48, 30));




function timeBasedGreeting() {
    const currentHour = new Date().getHours();
    const currentTime = new Date();

    if (currentHour < 12) {
        console.log(currentTime);
        return "Good morning";
    } else if (currentHour < 18) {
        console.log(currentTime);
        return "Good afternoon";
    } else {
        console.log(currentTime);
        return "Good evening";
    }
}

// Example usage
console.log(timeBasedGreeting());


function combineSensorData(temp, humidity) {
    return { temperature: temp, humidity: humidity }; //nodeRED -> {temperature: msg.payload.temperature, humidity: msg.payload.humidity };
}

// Example usage
console.log(combineSensorData(32, 60));


function addTimestamp(payload) {
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19); 
    payload.timestamp = timestamp; 
    return payload;
}

// Example usage
console.log(addTimestamp({ temperature: 32 }));



function accessProperty(msg, propertyName) {
    return msg.payload[propertyName];
}

// Example usage
let msg = { payload: { temperature: 32, humidity: 45 } };
console.log(accessProperty(msg, 'humidity'));
