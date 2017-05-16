/*
 * Created by https://github.com/YMFL on 2017/5/10.
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFormOtherFile from '../actions/userinfo'

class App extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            initDone:false
        }
    }
    componentDidMount(){
        //从localStorerage
        let cityName=LocalStore.getItem(CITYNAME);
        if(cityName==null){
            cityName="北京"
        }
        this.props.userInfoActions.update({
            cityName:cityName
        })
        setTimeout(()=>{
            this.setState({
                initDone:true
            })
        },100)
    }
    render() {
        return (
            <div>
                {this.state.initDone?this.props.children:<div>记载中。。。</div>}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{}
}
function mapDispatchToProps(dispatch) {
    return{
        userInfoActions:bindActionCreators(userInfoActionsFormOtherFile,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)