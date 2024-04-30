import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

import routes from './routes/index'
import routesM from './routes/index-m'
import ErrorLayoutPc from './components/Layout/ErrorLayout'
import ErrorLayoutM from './components-m/Layout/ErrorLayout'

class App extends Component {
    static routes () {
        return {
            routes,
            routesM
        }
    }

    static ErrorPage ({ platform, message, stack }) {
        if (platform === 'pc') {
            return <ErrorLayoutPc>
                <h1>{message}</h1>
                <pre>{stack}</pre>
            </ErrorLayoutPc>
        } else {
            return <ErrorLayoutM>
                <h1>{message}</h1>
                <pre>{stack}</pre>
            </ErrorLayoutM>
        }
    }

    render () {
        const routesLast = this.props.platform === 'pc' ? routes(this.props.routesParams) : routesM(this.props.routesParams)
        return <div className="app-container">
            {renderRoutes(routesLast, { ...this.props })}
        </div>
    }
}

export default App
