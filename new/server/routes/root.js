import index from './index'
import users from './users'
import signture from './signture'
import logger from './logger'

export default (app) => {
    app.use('/', index)
    app.use('/users', users)
    app.use('/signture', signture)
    app.use('/logger', logger)
}
