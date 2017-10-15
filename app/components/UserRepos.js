var React = require('react');
var createReactClass = require('create-react-class');

var UserRepos = createReactClass({
  getInitialState: function() {
    return {
      reposCount: 0,
      repos: []
    }
  },
  componentWillReceiveProps: function(props) {
    this.setState({
      reposCount: props.repos.data.length,
      repos: props.repos.data
    });
  },
  render: function() {
    if (this.state.repos.length > 0) {
      var repos = this.state.repos.map(function(repo, key) {
        return (
          <div key={key} className="list-group-item list-group-item-action">
            <a href={repo.html_url} target="_blank">{repo.full_name}</a>
            <br />
            <small className="text-muted">{repo.description}</small>
          </div>
        )
      });
    }

    return (
      <div className="col-9">
        <div className="card">
          <div className="card-header">
          Repositories <span className="badge badge-secondary">{this.state.reposCount}</span>
          </div>
          <div className="card-body">
            <div className="list-group">
              {repos}
            </div>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = UserRepos;