/*
 * Created by https://github.com/YMFL on 2017/5/10.
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'

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
        setTimeout(()=>{
            this.setState({
                initDone:true
            })
        },5000)
    }
    render() {
        return (
            <div>
                {this.state.initDone?this.props.children:<div>记载中。。。</div>}
            </div>
        )
    }
}
export default App