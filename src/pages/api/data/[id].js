// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if (req.method == "GET") {
        const { id } = req.query
        res.status(200).json({ a: 'sip', id })
    } else if (req.method == "POST") {
        const body = req.body
        res.status(200).json({ b: 'ok' })
    } else {
        res.status(404).json({ name: 'not found!' })
    }
}
