/*
 * Created by https://github.com/YMFL on 2017/5/10.
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class NotFound extends React.component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>404 Not Found Page</div>
        )
    }
}
export default NotFound