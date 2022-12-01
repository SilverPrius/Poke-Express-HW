const React = require('react')

const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
  };
  

  class MyFirstComponent extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
                <div>
                    <h1 style={myStyle} >See All The Pokemon!</h1>
                    <ul>
                        {pokemon.map((pokemon, i) => {
                            return (
                                <li>
                                    <a href={`/pokemon/${i}`}>
                                        {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                                    </a>
                                    <br />
                                </li>
                            );
                        })}
                    </ul>
                </div>
        );
    }
  }

  module.exports = MyFirstComponent