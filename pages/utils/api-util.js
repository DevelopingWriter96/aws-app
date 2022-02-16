export async function getThemeData(theme) {
    const response = await fetch(`http://brickset.com/api/v3.asmx/getSets?apiKey=3-kq43-jpaH-NZSZw&params={'theme':'${theme}'}`)
    const data = await response.json()
    console.log(data)
    return data
}