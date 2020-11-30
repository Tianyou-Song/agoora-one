// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

const api = (req: NextApiRequest, res: NextApiResponse): void => {
	// eslint-disable-next-line no-magic-numbers
	res.statusCode = 200;
	res.json({
		body        : JSON.stringify(req.body),
		cookies     : req.cookies,
		env         : req.env,
		name        : "John Doe",
		preview     : req.preview,
		previewData : JSON.stringify(req.previewData),
		query       : req.query,
	});
};

export default api;
