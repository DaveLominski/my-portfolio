import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import Cv from './DLCV.pdf';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title="My Portfolio">
            <Navigation>
                <Link to="/">Home</Link>
                <a href={Cv} rel="noopener noreferrer" target = "_blank">Resume</a>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
