var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var GitHubUser = require('../services/GiHubUser');

var SearchUser = createReactClass({
  handleSubmit: function(e) {
    e.preventDefault();

    GitHubUser.getByUsername(this.refs.username.value).then(function(response) {
      this.props.updateUser(response);
    }.bind(this));

    GitHubUser.getReposByUsername(this.refs.username.value).then(function(response) {
      this.props.updateRepos(response);
    }.bind(this));
  },
  render: function() {
    return (
      <div className="row">
        <div className="col">
          <div className="jumbotron">
            <h1 className="display-4"><strong>GitHub Search User</strong></h1>
            <div className="row">
              <div className="col">
                <form onSubmit={this.handleSubmit} className="justify-content-center">
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" ref="username" className="form-control" placeholder="Ex: wgenial" />
                  </div>
                  <button type="submit" className="btn btn-primary">Buscar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

SearchUser.PropTypes = {
  updateUser: PropTypes.func.isRequired,
  updateRepos: PropTypes.func.isRequired,
}

module.exports = SearchUser;