import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
     return(
       <div className="projects-grid">
         {/* Project 1 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{color: 'black', height: '176px', background: 'url(http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/python-icon.png) center / cover'}} >Python Project #1</CardTitle>
           <CardText>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
           </CardText>
           <CardActions border>
             <Button colored>GitHub</Button>
           </CardActions>
           <CardMenu style={{color: 'black'}}>
             <IconButton name="share" />
           </CardMenu>
         </Card>
         {/* Project 2 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{color: 'black', height: '176px', background: 'url(http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/python-icon.png) center / cover'}} >Python Project #2</CardTitle>
           <CardText>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
           </CardText>
           <CardActions border>
             <Button colored>GitHub</Button>
           </CardActions>
           <CardMenu style={{color: 'black'}}>
             <IconButton name="share" />
           </CardMenu>
         </Card>
         {/* Project 3 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{color: 'black', height: '176px', background: 'url(http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/python-icon.png) center / cover'}} >Python Project #3</CardTitle>
           <CardText>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
           </CardText>
           <CardActions border>
             <Button colored>GitHub</Button>
           </CardActions>
           <CardMenu style={{color: 'black'}}>
             <IconButton name="share" />
           </CardMenu>
         </Card>

         {/* Project 4 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{color: 'black', height: '176px', background: 'url(http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/python-icon.png) center / cover'}} >Python Project #3</CardTitle>
           <CardText>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
           </CardText>
           <CardActions border>
             <Button colored>GitHub</Button>
           </CardActions>
           <CardMenu style={{color: 'black'}}>
             <IconButton name="share" />
           </CardMenu>
         </Card>

       </div>
     )
   } else if(this.state.activeTab === 1){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>
      )
    }
  }


  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>Python</Tab>
          <Tab>React</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}


export default Projects;
