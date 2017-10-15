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
  componentDidMount: function() {
    console.log(this);
  },
  render: function() {
    if (this.state.repos.length > 0) {
      var repos = this.state.repos.map(function(repo, key) {
        return (
          <div key={key} className="list-group-item">
            <a href="{repo.html_url}">{repo.full_name}</a>
            <br />
            <small className="text-muted">{repo.description}</small>
          </div>
        )
      });
    }

    return (
      <div className="col-7">
        <div className="list-group">
          {repos}
        </div>
      </div>
    )
  }

});

module.exports = UserRepos;