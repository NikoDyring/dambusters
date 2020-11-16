import app from './app';
import * as database from './lib/database'

async function start () {
// eslint-disable-next-line @typescript-eslint/no-var-requires
console.log('⚾ Curveball v%s', require('@curveball/core/package.json').version);

const uri = process.env.MONGO_URI ?? ''
database.connect(uri)

const { connection } = require('mongoose')
connection.on('error', (error: unknown) => console.error(error))
connection.on('all', console.log.bind(console))
connection.on('open', () => console.log('Database connected.'))

// The HTTP port can be overridden via the 'PORT' environment variable.
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8500;
app.listen(port);

console.log('Listening on port %i', port);
}

start()
