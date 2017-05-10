/*
 * Created by https://github.com/YMFL on 2017/5/10.
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class App extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <header>header</header>
                {this.props.children}
                <footer>footer</footer>
            </div>
        )
    }
}
export default App