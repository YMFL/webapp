/**
 * Created by Administrator on 2017/5/10.
 */
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class City extends React.Component{
    constructor(){
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return(
            <div>City</div>
        )
    }
}
export default City