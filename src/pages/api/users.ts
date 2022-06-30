import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'maria' },
    { id: 2, name: 'joao' },
    { id: 3, name: 'maty' }
  ]

  return response.json(users)
}
