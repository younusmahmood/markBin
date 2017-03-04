import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {

  //Automatically called whenever the component is rendered to the screen
  // rendered exactly once
  componentDidMount() {
    // Render thethe b blaze accounts for then find the div we just rendered in the
    // render method and place the blaze accounts form in that div

    // this.view is a reference to hold the render return.it makes it easier cleaning up
    // Template.loginButtons - just taking forms that exist and rendering the template to
    // the reactdom node
      this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }

  // Automatically called whenever component unmounts
  componentWillUnmount() {
    // Go find the forms we created and destroy them
    // We need to clean up those forms ourselves

    // Kinda like garbage collection
    Blaze.remove(this.view);

  }


  render() {
    return (
      <div ref="container">

      </div>
    )
  }
}

export default Accounts;
