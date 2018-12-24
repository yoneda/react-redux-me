import React from "react";
import { connect } from "react-redux";

import Projects from "../components/Projects";
import PlusButton from "../components/PlusButton";
import ProjectItem from "../components/ProjectItem";

import Contacts from "../components/Contacts";
import ContactItem from "../components/ContactItem";

import Posts from "../components/Posts";

import { getOpenContent, getCloseContent, getOnDarkmode, getOffDarkmode } from "../actions/actions.js";

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
      <Projects
        button={<PlusButton isShow={true} handler={() => console.log("aa")} />}
        items={projectContents.map((item,index)=>{
          return(<ProjectItem key={index} title={item.title} link={item.link} />)
        })}
      />

      <Contacts
        button={<PlusButton isShow={true} handler={() => console.log("aa")} />}
        items={contactContents.map((item,index)=>{
          return(<ContactItem key={index} title={item.title} link={item.link} />)
        })}
      />

      <Posts
        button={<PlusButton isShow={true} handler={() => console.log("aa")} />}
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
