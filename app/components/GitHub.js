var React = require('react');
var createReactClass = require('create-react-class');

var SearchUser = require('./SearchUser');
var UserInfo = require('./UserInfo');

var GitHub = createReactClass({
  getInitialState: function() {
    return {
      user: null,
      repos: [],
    };
  },
  updateUser: function(user) {
    this.setState({user: user});
  },
  updateRepos: function(repos) {
    this.setState({repos: repos});
  },
  render: function() {
    return (
      <div className="container pt-3 pb-3">
        <SearchUser updateUser={this.updateUser} updateRepos={this.updateRepos} />
        <UserInfo user={this.state.user} repos={this.state.repos} />
      </div>
    );
  }
});

module.exports = GitHub;