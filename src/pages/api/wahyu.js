// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method == "GET") {
    res.status(200).json({ a: 'sip' })
  } else if (req.method == "POST") {
    const body = req.body
    res.status(200).json({ b: 'ok' })
  } else {
    res.status(404).json({ name: 'not found!' })
  }
}
