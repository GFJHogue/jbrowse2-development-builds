process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

import configTransform from './config.ts'
import configFactory from '../../../webpack/config/webpack.config.ts'
import build from '../../../webpack/scripts/build.ts'

void build(configTransform(configFactory()))
