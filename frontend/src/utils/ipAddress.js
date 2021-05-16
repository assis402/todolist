export async function getIp(){
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    const ip = data.ip.replaceAll(".", "")
    return ip
}