import type { NextApiRequest, NextApiResponse } from 'next'
import { addArtifact } from '..\/..\/lib\/db'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { link, title, description } = req.body
    addArtifact({ link, title, description })
    res.status(200).json({ message: 'Artifact added successfully' })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}