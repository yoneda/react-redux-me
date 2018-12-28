import React from "react";
import { connect } from "react-redux";

import Bio from "../components/Bio";
import Projects from "../components/Projects";
import PlusButton from "../components/PlusButton";
import ProjectItem from "../components/ProjectItem";

import Contacts from "../components/Contacts";
import ContactItem from "../components/ContactItem";

import Posts from "../components/Posts";

import { getOpenContent, getCloseContent, getOnDarkmode, getOffDarkmode } from "../actions/actions.js";
import ProjectKakeiboIcon from "../resources/projectKakeiboIcon.svg";
import logo from "../resources/logo.svg";

const CountContainer = ({ toggles, dark, openContentHandler, closeContentHandler, onDarkmodeHandler, offDarkmodeHandler }) => {
  const projectContents = [
    {title:"kakeibo", link:"http://google.com"},
    {title:"2 posts in a week", link:"http://google.com"}
  ];
  const contactContents = [
    {title:"kakeibo", link:"http://google.com"},
    {title:"2 posts in a week", link:"http://google.com"}
  ];

  return (
    <div>
      <Bio />
      
      <Projects
        isShow={toggles[0]}
        button={<PlusButton isActive={toggles[0]} openHandler={()=>openContentHandler(0)} closeHandler={()=>closeContentHandler(0)} />}
        items={projectContents.map((item,index)=>{
          return(<ProjectItem key={index} title={item.title} link={item.link} />)
        })}
      />

      <Contacts
        isShow={toggles[1]}
        button={<PlusButton isActive={toggles[1]} openHandler={()=>openContentHandler(1)} closeHandler={()=>closeContentHandler(1)} />}
        items={contactContents.map((item,index)=>{
          return(<ContactItem key={index} title={item.title} link={item.link} />)
        })}
      />

      <Posts
        isShow={toggles[2]}
        button={<PlusButton isActive={toggles[2]} openHandler={()=>openContentHandler(2)} closeHandler={()=>closeContentHandler(2)} />}
      />

      <div style={{width:"200px"}}>
        <a href="http://google.com" target="__blank">
        <span dangerouslySetInnerHTML={{__html:ProjectKakeiboIcon}} />
        </a>
      </div>

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
