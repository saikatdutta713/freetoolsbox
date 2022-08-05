// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { IncomingForm } from 'formidable'

// export const config = {
//   api: {
//     bodyParser: false,
//   }
// };

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe', request: 'get', req: req.body })

}