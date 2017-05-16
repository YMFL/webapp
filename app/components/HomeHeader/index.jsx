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
            <div className="clear-fix HomeHeader">
                <div className="home-header-left float-left">
                    <span>深圳</span>&nbsp;
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input placeholder="请输入关键字" type="text"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeHeader