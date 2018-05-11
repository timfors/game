import express from 'express';


export default () => {
	const app =  express();

	app.use(express.static(__dirname + '/public'));
	
	app.set('view engine', 'pug');
	app.set('views', 'views');

	app.get("/", (res,req) => {
		req.render("game");
	})	

	return app;
}