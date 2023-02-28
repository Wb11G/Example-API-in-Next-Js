// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if (req.method == "GET") {
        res.status(200).json({ a: 'sip' })
    } else if (req.method == "POST") {
        const { sip, ok } = req.body
        if (!(sip && ok)) {
            res.status(400).json({ coba: 'sip & ok require!' })
        }
        res.status(200).json({ coba: 'wahyu mencoba', sip, ok })
    } else {
        res.status(404).json({ name: 'not found!' })
    }
}
