import React, { Component } from 'react';
import {createContainer} from 'meteor/react-meteor-data'
import { Bins } from '../../../imports/collections/bin'
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';

class BinsMain extends Component {
  render () {
    if(!this.props.bin) {
      return <div>Loading</div>
    }

    return (
      <div>
        <BinsEditor bin={this.props.bin}/>
        <BinsViewer bin={this.props.bin}/>
      </div>
    )
  }
}

export default createContainer((props) => {
  const { binId } = props.params;
  Meteor.subscribe('bins');

return { bin: Bins.findOne(binId) };
}, BinsMain)
