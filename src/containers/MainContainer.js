import React from "react";
import { connect } from "react-redux";

import Background from "../components/Background";
import UpdateGrobalCss from "../components/UpdateGrobalCss";
import MoonButton from "../components/MoonButton";
import Title from "../components/Title";
import Description from "../components/Description";
import Projects from "../components/Projects";
import PlusButton from "../components/PlusButton";
import ProjectItem from "../components/ProjectItem";
import Contacts from "../components/Contacts";
import ContactItem from "../components/ContactItem";
import Posts from "../components/Posts";

import {
  getOpenContent,
  getCloseContent,
  getOnDarkmode,
  getOffDarkmode,
  getOnMoonbuttonPressed,
  getAddPostsAsync,
} from "../actions/actions.js";

import instagram from "../resources/instagram.min.svg";
import twitter from "../resources/twitter.min.svg";
import github from "../resources/github.min.svg";
import behance from "../resources/behance.min.svg";
import PlusButtonAnimated from "../components/PlusButtonAnimated";

const MainContainer = ({
  toggles,
  dark,
  loading,
  articles,
  moonbuttonPressed,
  openContentHandler,
  closeContentHandler,
  onDarkmodeHandler,
  offDarkmodeHandler,
  onMoonbuttonPressedHandler,
  addPostsAsyncHandler,
}) => {
  // MainContainer が読み込まれた時に実行(本当はcomponentDidMountあたりに書きたい)

  const projectContents = [
    { title: "Kakeibo", link: "https://react-redux-project.netlify.com/" },
    { title: "Weekly post", link: "https://react-redux-project.netlify.com/" }
  ];
  const contactContents = [
    { title: "twitter", link: "http://twitter.com/yonedaco", svg: twitter },
    { title: "github", link: "http://github.com/yoneda", svg: github },
    { title: "instagram", link: "http://instagram.com/yonedaco", svg: instagram },
    { title: "instagram", link: "https://www.behance.net/yoneda/", svg: behance }
  ];
  return (
    // TODO: container component は主にロジックを管理するためのコンポーネントで、デザインを担当するのはpresententional component。
    // 下記3つのdivタグは 全体のデザインをするためのPresententional componentを作成してそこに記述するべき。
    <div style={{ height: "100%", backgroundColor: "none" }} className="chameleonBackground">
      <div style={{ width: "800px", margin: "auto" }}>
        <div style={{ width: "760px", padding: "20px 20px 20px 20px" }}>
          <Background isDarkmode={dark} />
          {moonbuttonPressed === true ? <UpdateGrobalCss isDarkmode={dark} /> : ""}
          
          {/*アニメーションのテスト */}
          <PlusButtonAnimated
            updateHandler={(isOpen)=>console.log(isOpen)}
          />

          <MoonButton
            isDarkmode={dark}
            isMoonbuttonPressed={moonbuttonPressed}
            onHandler={onDarkmodeHandler}
            offHandler={offDarkmodeHandler}
            pressedHandler={onMoonbuttonPressedHandler}
          />
          <Title />
          <Description />

          <Projects
            isShow={toggles[0]}
            button={
              <PlusButton
                isActive={toggles[0]}
                openHandler={() => openContentHandler(0)}
                closeHandler={() => closeContentHandler(0)}
              />
            }
            items={projectContents.map((item, index) => {
              return <ProjectItem key={index} title={item.title} link={item.link} />;
            })}
          />

          <Contacts
            isShow={toggles[1]}
            button={
              <PlusButton
                isActive={toggles[1]}
                openHandler={() => openContentHandler(1)}
                closeHandler={() => closeContentHandler(1)}
              />
            }
            items={contactContents.map((item, index) => {
              return <ContactItem key={index} title={item.title} link={item.link} svg={item.svg} />;
            })}
          />

          <Posts
            isShow={toggles[2]}
            button={
              <PlusButton
                isActive={toggles[2]}
                openHandler={() => openContentHandler(2)}
                closeHandler={() => closeContentHandler(2)}
              />
            }
            articles={articles}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    toggles: state.toggles,
    dark: state.dark,
    loading: state.loading,
    articles: state.posts,
    moonbuttonPressed: state.moonbuttonPressed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openContentHandler: index => dispatch(getOpenContent(index)),
    closeContentHandler: index => dispatch(getCloseContent(index)),
    onDarkmodeHandler: () => dispatch(getOnDarkmode()),
    offDarkmodeHandler: () => dispatch(getOffDarkmode()),
    onMoonbuttonPressedHandler: () => dispatch(getOnMoonbuttonPressed()),
    addPostsAsyncHandler: () => dispatch(getAddPostsAsync()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
