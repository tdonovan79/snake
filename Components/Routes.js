import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Start from './Start.js'
import GameScreen from './GameScreen.js'

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="Start" component={Start} title="Start" initial={true} />
            <Scene key="GameScreen" component={GameScreen} title="GameScreen" />
        </Scene>
    </Router>
)
export default Routes