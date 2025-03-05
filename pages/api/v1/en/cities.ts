import { NextApiRequest, NextApiResponse } from 'next';
import { CitiesQueryParams, getCities } from '../../../../lib/city';
import { cors } from '../../../../middlewares/cors';

const states = require('../../../../public/iran_cities_in_english.json');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  cors(req, res);
  const { state, state_id, city } = req.query as unknown as CitiesQueryParams;
  try {
    const matchedCities = getCities(states, state_id, state, city);
    return res.status(200).json(matchedCities);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
