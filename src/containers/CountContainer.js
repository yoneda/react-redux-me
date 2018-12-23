import React from "react";
import { connect } from 'react-redux'
import Buttons from "../components/Buttons";
import Display from "../components/Display";

import Projects from "../components/Projects";
import OpenButton from "../components/OpenButton";
import ProjectItem from "../components/ProjectItem";

import { getAddCount, getSubCount, getResetCount } from "../actions/actions.js";

const CountContainer = ({ count, addCountHandler, subCountHandler, resetCountHandler }) => {

  const renderOpenButton = () => {
    return(
      <OpenButton isShow={true} handler={()=>console.log("aa")} />
    )
  }
  const renderProjectItems = () => {
    return(
      <ProjectItem title={"title"} link={"yoneda.xyz"}/>
    )
  }
  return(
    <div>
      <Display count={count} />
      <Buttons addCountHandler={addCountHandler} subCountHandler={subCountHandler} resetCountHandler={resetCountHandler}/>
      <Projects
      button={
        <OpenButton isShow={true} handler={()=>console.log("aa")} />
      }
      items={
      <ProjectItem title={"title"} link={"yoneda.xyz"}/>
      }
      />
    </div>
  )
}

const mapStateToProps = state => {
  return{
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  const addCountAction = getAddCount(1);
  const subCountAction = getSubCount(1);
  const resetCountAction = getResetCount();
  return{
    addCountHandler : (num) => dispatch(addCountAction),
    subCountHandler : (num) => dispatch(subCountAction),
    resetCountHandler : (num) => dispatch(resetCountAction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountContainer)
