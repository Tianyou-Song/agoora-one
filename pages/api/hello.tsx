// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

const api = (req: NextApiRequest, res: NextApiResponse): void => {
	// eslint-disable-next-line no-magic-numbers
	res.statusCode = 200;
	res.json({ name : "John Doe" });
};

export default api;
