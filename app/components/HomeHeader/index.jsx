/*
 * Created by https://github.com/YMFL on 2017/5/16.
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class HomeHeader extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="clear-fix">
                <div className="float-left">深圳</div>
                <div className="float-right"><i className="icon-user"></i></div>
                <div ><input type="text"/></div>
            </div>
        )
    }
}
export default HomeHeader