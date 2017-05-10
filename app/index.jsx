/**
 * Created by Administrator on 2017/5/10.
 */
import React from 'react';
import ReactDOM from 'react-dom' ;

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>hello world!</h1>
            </div>
        );
    }
}
ReactDOM.render(<Hello/>, document.getElementById('root'))
