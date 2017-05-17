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
                <div className="home-header-left">
                    <span>{this.props.cityName}</span>&nbsp;
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <input placeholder="请输入关键字" type="text"/>
                        <i className="icon-search"></i>
                    </div>
                </div>
                <div className="home-header-right ">
                    <i className="icon-user"></i>
                </div>
            </div>
        )
    }
}
export default HomeHeader