/*
 * Created by https://github.com/YMFL on 2017/5/17.
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import SwipeableViews from 'react-swipeable-views'
import {autoPlay,bindKeyboard} from 'react-swipeable-views-utils'
const AutoPlaySwipeableViews = autoPlay(bindKeyboard(SwipeableViews));

class Category extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <AutoPlaySwipeableViews>
                    <div >
                        slide n°1
                    </div>
                    <div >
                        slide n°2
                    </div>
                    <div >
                        slide n°3
                    </div>
                </AutoPlaySwipeableViews>
            </div>
        )
    }

    componentDidMount() {
    }
}
export default Category