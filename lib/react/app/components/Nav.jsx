import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
    render() {
        return (
            <div>
                <Link to="/react/">首页13</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/react/list">列表</Link>
            </div>
        )
    }
}

export default Nav;