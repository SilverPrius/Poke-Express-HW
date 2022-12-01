const React = require('react')

const myStyle = {
    color: 'yellow',
    backgroundColor: '#000000',
  };

  class MyFirstComponent extends React.Component {
    render() {
    return (
      <div style={myStyle}><h1>See All The Pokemon!</h1></div>)
    }
  }

  module.exports = MyFirstComponent