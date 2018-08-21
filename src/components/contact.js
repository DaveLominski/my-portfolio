import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent,} from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={6}>
            <div className="about-text">
              <h2>About Me ...</h2>
              <img
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
                alt="avatar"
                style={{height:'250px'}}
                />
              <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.  </p>
            </div>
          </Cell>
          <Cell col={6}>
            <div className="contact-text">
              <h2> Contact Me</h2>
              <hr/>
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '40px', fontFamily: 'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      dawidlominski996@gmail.com
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent style={{fontSize: '40px', fontFamily: 'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      +447598884269
                    </ListItemContent>
                  </ListItem>
                </List>
            </div>
          </Cell>
        </Grid>
      </div>

    )
  }
}


export default Contact;
