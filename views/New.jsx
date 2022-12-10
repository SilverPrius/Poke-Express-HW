const React = require('react')

class New extends React.Component {
    render() {
      return (
          <div>
            <nav>
                    <a href="/pokemon">Home</a>
                </nav>
              <h1>New Pokemon page</h1>
              <form action="/pokemon" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  
                  <input type="submit" name="" value="Create Pokemon"/>
               </form>
          </div>);
    }
  }

module.exports = New