import app from "./server.js";

const port = 8080;

app().listen(port, (res, err) => {
	if (err) {
		console.log("err");
		return;
	}
	console.log("GOTCHA!")
})