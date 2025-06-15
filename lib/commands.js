const { exec } = require("child_process") // Import the exec() function from child_process which lets us run terminal commands

// Function for catching errors
const errorCatch = (error, stdout, stderr) => {
    if (error) console.log(error); // If there's an error, log it (error event emitted by Node.js)
    else if (stdout) console.log(stdout); // If the process is successful, log the output
    else if (stderr) console.log(stderr); // If there's an error, log it (standard error stream)
};

module.exports = function run(cmd) {

    // Checks the value of cmd and responds to different cases
    switch (cmd) {

        // In the case where cmd == "roblox"
        case "roblox":

            // Run org.vinegarhq.Sober, which opens Roblox
            // The second argument is a callback function for exposing errors
            exec("org.vinegarhq.Sober", errorCatch);
            break; // End case checking

        // In the case where cmd == "konsole"
        case "konsole":

            // Run org.kde.konsole, which opens Konsole
            // The second argument is a callback function for exposing errors
            exec("org.kde.konsole", errorCatch);
            break; // End case checking

        // In the case where cmd == "kitty"
        case "kitty":
            // Run kitty, which opens Kitty
            // The second argument is a callback function for exposing errors
            exec("kitty", errorCatch);
            break; // End case checking

        // In the case where cmd == "spotify"
        case "spotify":
            // Run spotify-launcher, which opens spotify
            // The second argument is a callback function for exposing errors
            exec("spotify-launcher", errorCatch);
            break; // End case checking
        
        // In the case where cmd == "studio"
        case "studio":
            // Run org.vinegarhq.Vinegar, which opens the Roblox Studio launcher
            // The second argument is a callback function for exposing errors
            exec("org.vinegarhq.Vinegar", errorCatch);
            break; // End case checking

        // In the case where cmd == "discord"
        case "discord":
            // Run legcord, which opens Discord
            // The second argument is a callback function for exposing errors
            exec("legcord", errorCatch);
            break; // End case checking

        // In the case where cmd isn't any of the cases specified above
        default:
            console.log("Invalid command! Run 'open -h' to see all commands."); // Print an error message
    };
};