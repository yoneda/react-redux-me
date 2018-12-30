import React from "react";
import { connect } from "react-redux";

import Background from "../components/Background";
import UpdateGrobalCss from "../components/UpdateGrobalCss";
import Bio from "../components/Bio";
import MoonButton from "../components/MoonButton";
import Projects from "../components/Projects";
import PlusButton from "../components/PlusButton";
import ProjectItem from "../components/ProjectItem";

import About from "../components/About";
import Contacts from "../components/Contacts";
import ContactItem from "../components/ContactItem";

import Posts from "../components/Posts";

import { getOpenContent, getCloseContent, getOnDarkmode, getOffDarkmode } from "../actions/actions.js";
import instagram from "../resources/instagram.svg";
import twitter from "../resources/twitter.svg";
import github from "../resources/github.svg";
import moon from "../resources/moon.svg";

const CountContainer = ({ toggles, dark, openContentHandler, closeContentHandler, onDarkmodeHandler, offDarkmodeHandler }) => {
  const projectContents = [
    {title:"kakeibo", link:"http://google.com"},
    {title:"2 posts in a week", link:"http://google.com"},
  ];
  const contactContents = [
    {title:"twitter", link:"http://twitter.com/yonedaco", svg:twitter},
    {title:"github", link:"http://github.com/yoneda", svg:github},
    {title:"instagram", link:"http://instagram.com/", svg:instagram},
  ];

  return (
    <div>
      {/*
      <Background isDarkmode={dark} />
      <UpdateGrobalCss isDarkmode={dark} />
      <MoonButton isDarkmode={dark} onHandler={onDarkmodeHandler} offHandler={offDarkmodeHandler} />
      <Bio />

      <About
        isShow={toggles[0]}
        button={<PlusButton isActive={toggles[0]} openHandler={()=>openContentHandler(0)} closeHandler={()=>closeContentHandler(0)} />}
      />

      <Projects
        isShow={toggles[1]}
        button={<PlusButton isActive={toggles[1]} openHandler={()=>openContentHandler(1)} closeHandler={()=>closeContentHandler(1)} />}
        items={projectContents.map((item,index)=>{
          return(<ProjectItem key={index} title={item.title} link={item.link} />)
        })}
      />

      <Contacts
        isShow={toggles[2]}
        button={<PlusButton isActive={toggles[2]} openHandler={()=>openContentHandler(2)} closeHandler={()=>closeContentHandler(2)} />}
        items={contactContents.map((item,index)=>{
          return(<ContactItem key={index} title={item.title} link={item.link} svg={item.svg} />)
        })}
      />
      */}
      {/*
      <Projects
        isShow={true}
        button={<PlusButton isActive={toggles[1]} openHandler={()=>openContentHandler(1)} closeHandler={()=>closeContentHandler(1)} />}
        items={projectContents.map((item,index)=>{
          return(<ProjectItem key={index} title={item.title} link={item.link} />)
        })}
      />*/}
      <Contacts
        isShow={true}
        button={<PlusButton isActive={toggles[2]} openHandler={()=>openContentHandler(2)} closeHandler={()=>closeContentHandler(2)} />}
        items={contactContents.map((item,index)=>{
          return(<ContactItem key={index} title={item.title} link={item.link} svg={item.svg} />)
        })}
      />

    </div>
  );
};

const mapStateToProps = state => {
  return {
    toggles: state.toggles,
    dark: state.dark
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openContentHandler: index => dispatch(getOpenContent(index)),
    closeContentHandler: index => dispatch(getCloseContent(index)),
    onDarkmodeHandler: () => dispatch(getOnDarkmode()),
    offDarkmodeHandler: () => dispatch(getOffDarkmode())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountContainer);
