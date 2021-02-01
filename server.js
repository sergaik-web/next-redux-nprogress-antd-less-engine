const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 5740;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	// server.route('/pdf').get( async (req, res)=> {
	// 	const ctx = {
	// 		query: req.query,
	// 		token: req.headers.cookie.split('=')[1]
	// 	}
	// 	const pdf = await fetch(
	// 		`http://ecab.taxi.developeri.us/api/documents/${ctx.query.id}/pdf`,
	// 		{
	// 			method: 'GET',
	// 			headers: {
	// 				'Authorization': ctx.token,
	// 				'Content-Type': 'application/pdf',
	// 			}
	// 		}
	// 	)
	// 		.then(response => response.blob())
	//
	// 	res.send(pdf)
	// })

	server.get('*', getPathRender);

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});

async function getPathRender(req, res) {
	return handle(req, res);
}
