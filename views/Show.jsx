const React = require('react')

const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
};


class Show extends React.Component {
    render() {
        const { pokemon } = this.props;
        console.log(pokemon)
        return (
            <div>
                <nav>
                    <a href="/pokemon">Back</a>
                </nav>
                <h1 style={myStyle} >Gotta Catch 'Em All</h1>
                <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
                <img src={pokemon.img + '.jpg'}></img>
               
            </div>
        );
    }
}

module.exports = Show;



