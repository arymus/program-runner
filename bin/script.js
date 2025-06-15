#!/usr/bin/env node
/* ^ Allows us to run this file without the node command
 * by passing the node interpreter as the first argument in the terminal
 * so that the second argument (the one we input) is the file name
 * (in this case an alias for the file, which would be open)
 * 
 * https://en.wikipedia.org/wiki/Shebang_(Unix)
 */

const arg = require("arg"); // Import the arg package for parsing arguments

// Try to run this block of code
try {

    // Define arguments
    const args = arg({
    "--help": Boolean, // --help flag for showing commands, which can be true or false as an argument
	"--version": Boolean, // --version flag for showing the version, which can be true or false as an argument
    "-h": "--help", // -h shorthand for --help
	"-v": "--version", // -v shorthand for --version
    });

    
    // If the argument passed with the command is "--help" or its shorthand "-h"
    if (args["--help"]) {

        // Log the instructions
	    console.log("open roblox: Opens Roblox\nopen konsole: Opens Konsole\nopen kitty: opens kitty\nopen spotify: opens spotify\n--help / -h: Show this message\n--version / -v: Show the version");

    // If the argument passed with the command is "--version" or its shorthand "-v"
    } else if (args["--version"]) {
        const { version } = require("../package.json"); // Import the version from package.json
        console.log(version); // Log the version

    // If else
    } else {
	    const run = require("../lib/commands.js"); // Import the run() function from commands.js
        run(process.argv[2]); // Pass the second argument to the run function as the command
    };

// Catch the errors, represented as err
} catch (err) {
    console.log(err); // Log the error
};
