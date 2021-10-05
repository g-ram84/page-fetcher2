const request = require("request");
const arg = process.argv.slice(2);
const fs = require("fs");

request(`${arg[0]}`, (error, response, body) => {
	if (error || response.statusCode !== 200) {
		console.log("Something went wrong.  Please check your URL");
		return;
	}
	console.log(arg[1]);
	fs.writeFile(`${arg[1]}`, body, (err) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(`Downloaded and saved ${body.length} bytes to ${arg[1]}`);
	});
});
