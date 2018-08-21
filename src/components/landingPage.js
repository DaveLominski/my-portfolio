import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
            alt="avatar"
            className="avatar-img"
            />
          <div className="banner-text">
            <h1>Dawid Lominski</h1>

          <hr/>
        <p>Python | JavaScript | React </p>
      <div className="social-links">
        {/* LinkedIn profile */}
        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>
        {/* Github profile */}
        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" />
        </a>

        {/* Facebook profile */}
        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-facebook-square" aria-hidden="true" />
        </a>

      </div>
          </div>
        </Cell>
      </Grid>

      </div>
    )
  }
}


export default Landing;