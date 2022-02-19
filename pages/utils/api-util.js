export async function getSetData(set) {
    const response = await fetch("https://brickset.com/api/v3.asmx/getSets", {
        method: 'POST',
        body: new URLSearchParams({
            'apiKey': '3-kq43-jpaH-NZSZw',
            'params': JSON.stringify({setNumber: `${set}-1`}),
            'userHash': ''
        })
    })
    return await response.json()
}