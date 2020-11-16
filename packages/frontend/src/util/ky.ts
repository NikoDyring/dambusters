import ky from 'ky'

const prefixUrl = process.env.API_URL ?? 'http://localhost:8500'

export default ky.create({ prefixUrl })
