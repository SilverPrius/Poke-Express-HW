const React = require('react')

const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
};


class Show extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <div>
                <h1 style={myStyle} >Gotta Catch 'Em All</h1>
                <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
                <img src={pokemon.img + '.jpg'}></img>
                <a href="/pokemon">Back</a>
    
            </div>
        );
    }
}

module.exports = Show;



