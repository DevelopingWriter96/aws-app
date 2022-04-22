// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const set = req.body.set

  const response = await fetch("https://brickset.com/api/v3.asmx/getSets", {
    method: 'POST',
    body: new URLSearchParams({
        'apiKey': '3-kq43-jpaH-NZSZw',
        'params': JSON.stringify({setNumber: `${set}-1`}),
        'userHash': ''
    })
  })
  
  const setData = await response.json()
  
  res.status(200).json(setData)
  }
}
