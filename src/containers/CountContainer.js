import React from "react";
import { connect } from "react-redux";
import Buttons from "../components/Buttons";
import Display from "../components/Display";

import Projects from "../components/Projects";
import PlusButton from "../components/PlusButton";
import ProjectItem from "../components/ProjectItem";

import Contacts from "../components/Contacts";
import ContactItem from "../components/ContactItem";

import Posts from "../components/Posts";

import { getAddCount, getSubCount, getResetCount } from "../actions/actions.js";

const CountContainer = ({ count, addCountHandler, subCountHandler, resetCountHandler }) => {
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
      <Display count={count} />
      <Buttons
        addCountHandler={addCountHandler}
        subCountHandler={subCountHandler}
        resetCountHandler={resetCountHandler}
      />
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
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  const addCountAction = getAddCount(1);
  const subCountAction = getSubCount(1);
  const resetCountAction = getResetCount();
  return {
    addCountHandler: num => dispatch(addCountAction),
    subCountHandler: num => dispatch(subCountAction),
    resetCountHandler: num => dispatch(resetCountAction)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountContainer);
