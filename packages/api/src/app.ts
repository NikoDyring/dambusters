import { Application } from '@curveball/core'
import accessLog from '@curveball/accesslog'
import problem from '@curveball/problem'
import bodyParser from '@curveball/bodyparser'
import cors from '@curveball/cors'
import routes from './routes'
import { jsonOnly } from './middleware/json-only'

const app = new Application()
app.use(cors())

// The accesslog middleware shows all requests and responses on the cli.
app.use(accessLog())

// The problem middleware turns exceptions into application/problem+json error
// responses.
app.use(problem())

// The bodyparser middleware is responsible for parsing JSON and url-encoded
// request bodies, and populate ctx.request.body.
app.use(bodyParser())

app.use(jsonOnly())

app.use(...routes)

export default app