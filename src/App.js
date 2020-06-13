import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Home from "./components/Home";
import Display from "./components/Display";
import ItemDisplay from "./components/ItemDisplay";
import Content from "./components/Content";
import Contents from "./components/Contents";

class App extends Component {
  state = {
    information: {},
    infodata: {},
    html_url: {},
    avatar_url: {},
  };

  getInfo = async (num, mun, qty, ytq) => {
    const res = await axios.get(`https://picsum.photos/id/${num}/info`);
    this.setState({ information: res.data });
  };
  getInf = async (mun) => {
    const item = await axios.get(`https://picsum.photos/id/${mun}/info`);
    this.setState({ infodata: item.data });
  };

  getInform = async (qty) => {
    const numb = await axios.get(`https://picsum.photos/id/${qty}/info`);
    this.setState({ html_url: numb.data });
  };

  getData = async (ytq) => {
    const items = await axios.get(`https://picsum.photos/id/${ytq}/info`);
    this.setState({ avatar_url: items.data });
  };

  render() {
    const { avatar_url, information, infodata, html_url } = this.state;

    return (
      <div>
        <Home
          getInfo={this.getInfo}
          getData={this.getData}
          getInf={this.getInf}
          getInform={this.getInform}
        ></Home>
        <div className='row'>
          <div className='column'>
            <div className='card'>
              <Display information={information} />
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <Content infodata={infodata} />
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <ItemDisplay avatar_url={avatar_url} />
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <Contents html_url={html_url} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
