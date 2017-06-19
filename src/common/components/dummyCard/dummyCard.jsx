import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DummyCard extends Component {

    static propTypes = {
        children: PropTypes.node
    };

    render () {
        return (
          <div>
            <h1>Dummy Card</h1>
            {this.props.children}
          </div>
        );
    }
}
