const core = require('@actions/core');
const github = requre('@actions/github');

async function run() {
    try {
        const whoToGreet = core.getInput('who-to-greet');
        console.log(`Hello, ${whoToGreet}!`);

        // Get the current time and set it as an outout variable
        const time = (new Date()).toTimeString();
        core.setOutput("time", time);

        // Access the github event payload
        const payload = JSON.stringify(github.context.payload, undefined, 2);
        console.log(`The event payload: ${payload}`);

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();