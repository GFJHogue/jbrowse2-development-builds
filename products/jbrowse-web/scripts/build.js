process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

import configTransform from './config.js'
import configFactory from '../../../webpack/config/webpack.config.js'
import build from '../../../webpack/scripts/build.js'

void build(configTransform(configFactory()))
