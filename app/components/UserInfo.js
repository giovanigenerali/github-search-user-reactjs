var React = require('react');
var PropTypes = require('prop-types');

var UserRepos = require('./UserRepos');

function UserInfo(props) {
  var userInfo = null;
  if (props.user && props.repos) {
    var created_at = (new Date(props.user.data.created_at)).toString();
    userInfo = (
      <div className="row justify-content-start">
        <div className="col-3">
          <div className="card">
            <img className="card-img-top" src={props.user.data.avatar_url} alt="avatar" />
            <div className="card-body">
              <h4 className="card-title">{props.user.data.login}</h4>
              <p className="card-text">
              <a href={props.user.data.blog} className="card-link">{props.user.data.blog}</a>
              <br />
              {props.user.data.email}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Followers: {props.user.data.followers}</li>
              <li className="list-group-item">Following: {props.user.data.following}</li>
            </ul>
            <div className="card-body text-center">
              <a href={props.user.data.html_url} className="btn btn-primary">View details</a>
            </div>
            <div className="card-footer">
              <small className="text-muted"><strong>Account created at:</strong><br /> {created_at}</small>
            </div>
          </div>
        </div>
        <UserRepos repos={props.repos} />
      </div>
    );
  }

  return userInfo;
}

UserInfo.PropTypes = {
  user: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
}

module.exports = UserInfo;