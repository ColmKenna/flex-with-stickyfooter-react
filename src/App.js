import "bootstrap-icons/font/bootstrap-icons.css";

import './App.css';
import {Header} from "./Header";
import {Main} from "./Main";
import {NavigationBar} from "./NavigationBar";
import {Article} from "./Article";
import {Aside} from "./Aside";
import {Footer} from "./Footer";
import {useState} from "react";
import * as PropTypes from "prop-types";
import {SideMenuMobileBar} from "./SideMenuMobileBar";


SideMenuMobileBar.propTypes = {children: PropTypes.node};

function App() {

    const [navVisible, setNavVisible] = useState(false);
    const [asideVisible, setAsideVisible] = useState(false);

    function updateNavVisibility(){
        if(!navVisible){
            setAsideVisible(false);
        }
        setNavVisible(!navVisible);

    }

    function updateAsideVisibility(){
        if(!asideVisible){
            setNavVisible(false);
        }
        setAsideVisible(!asideVisible);
    }

  return (
      <div className="App-Shell">
        <Header > <h1>Header</h1> </Header>
        <Main>
            <SideMenuMobileBar>
                <i className="bi bi-list b-1-5x" onClick={() => updateNavVisibility()}/>
                <i className="bi bi-info-circle b-1-5x" onClick={() => updateAsideVisibility()}/>
            </SideMenuMobileBar>
          <NavigationBar id="navBar" showNavMobile={navVisible}   ><h1>Navigation</h1></NavigationBar>
          <Article>
            <h1>Main Content</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem blanditiis commodi esse
              fuga magnam molestiae molestias neque nobis, obcaecati praesentium quam quo reiciendis soluta temporibus
              velit veniam voluptatibus </p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem blanditiis commodi esse
                  fuga magnam molestiae molestias neque nobis, obcaecati praesentium quam quo reiciendis soluta temporibus
                  velit veniam voluptatibus </p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem blanditiis commodi esse
                  fuga magnam molestiae molestias neque nobis, obcaecati praesentium quam quo reiciendis soluta temporibus
                  velit veniam voluptatibus </p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem blanditiis commodi esse
                  fuga magnam molestiae molestias neque nobis, obcaecati praesentium quam quo reiciendis soluta temporibus
                  velit veniam voluptatibus </p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem blanditiis commodi esse
                  fuga magnam molestiae molestias neque nobis, obcaecati praesentium quam quo reiciendis soluta temporibus
                  velit veniam voluptatibus </p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem blanditiis commodi esse
                  fuga magnam molestiae molestias neque nobis, obcaecati praesentium quam quo reiciendis soluta temporibus
                  velit veniam voluptatibus </p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem blanditiis commodi esse
                  fuga magnam molestiae molestias neque nobis, obcaecati praesentium quam quo reiciendis soluta temporibus
                  velit veniam voluptatibus </p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem blanditiis commodi esse
                  fuga magnam molestiae molestias neque nobis, obcaecati praesentium quam quo reiciendis soluta temporibus
                  velit veniam voluptatibus </p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem blanditiis commodi esse
                  fuga magnam molestiae molestias neque nobis, obcaecati praesentium quam quo reiciendis soluta temporibus
                  velit veniam voluptatibus </p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem blanditiis commodi esse
                  fuga magnam molestiae molestias neque nobis, obcaecati praesentium quam quo reiciendis soluta temporibus
                  velit veniam voluptatibus </p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem blanditiis commodi esse
                  fuga magnam molestiae molestias neque nobis, obcaecati praesentium quam quo reiciendis soluta temporibus
                  velit veniam voluptatibus </p>
          </Article>
          <Aside showAsideMobile={asideVisible}   >
            <h1>Sidebar</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem blanditiis commodi esse
              fuga magnam molestiae molestias neque nobis, obcaecati praesentium quam quo reiciendis soluta temporibus
              velit veniam voluptatibus </p>
          </Aside>

        </Main>
        <Footer>
          <h1>Footer</h1>

        </Footer>
      </div>
  );
}

export default App;
