'use strict'
import { Request, Response } from 'express'
import expressHttpProxy from 'express-http-proxy'
const API_BASE_URL = 'http://localhost:7891'

/**
 * List of API examples.
 * @route GET /api
 */
// export const getApi = async (req: Request, res: Response) => {
//   return res.status(200).json({ data: 'ok' })
// }

export const getApi = expressHttpProxy(API_BASE_URL, {})
