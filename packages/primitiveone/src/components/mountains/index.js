import React from "react";
import { connect, Global, Head, styled, Slot } from "frontity";
import Switch from "@frontity/components/switch";
import Loading from "../pebbles/loading";
import MetaTitle from "../pebbles/meta-title";
import Header from "../rocks/header";
import Nav from "../rocks/nav";
import Footer from "../rocks/footer";
import Home from './page-home';
import Post from "./post";
import Page from "./page";
import Posts from "./post-list";

//import Page404 from "./page404";
import PageError from "./page-error";

// check best method of conditional loading / imports
import GlobalPromo from "../rocks/global-promo";
import GlobalSocial from "../rocks/social/social-section";

import Timelines from "../timeline/ct-timelines";
import Timeline from "../timeline";
import SubTimeline from "../timeline/cpt-subtimeline";

import globalStyles from '../dust/global-styles';
//import FontFaces from "../dust/font-faces";

import ReactGA from 'react-ga';


const Theme = ({ state }) => {

  const data = state.source.get(state.router.link);
  const display = state.theme.config;

  console.log("@index: data", data);
  //console.log("@index: display", display);

  /*
   sk-dev: basic tracking snippet (fails to report 404s/Errors)
          : 10/05/20 replaced as per: https://community.frontity.org/t/using-frontity-analytics/1677/4
          
    function initializeReactGA() {
      ReactGA.initialize('UA-61815763-1');
      ReactGA.pageview(state.router.link);
    }
    initializeReactGA();
  */

  return (
    <>
      {
        /*
          Add global styles for the whole site, like body or a's or font-faces. 
          Not classes here because we use CSS-in-JS. Only global HTML tags.
        */
      }
      <Global styles={globalStyles(state.theme.colors)} />

      {/* sk-dev: TESTING <FontFaces /> */}

      {/* Add some metatags to the <head> of the HTML. */}
      <MetaTitle />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC|Comfortaa|Hepta+Slab|Pacifico|Playfair+Display:700|Slabo+27px&display=swap" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="canonical" href="https://primitivedigital.co.uk" />
        <link rel="dns-prefetch" SameSite="None" Secure href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" SameSite="None" Secure href="http://doubleclick.net" />
      </Head>

      <HeadWrapper className="wrap-header">
        <Header />
        <Nav />
      </HeadWrapper>

      <BodyWrapper className="wrap-body">

        <Switch>

          <Loading when={data.isFetching} />

          <Home when={data.isHome} />
          <Posts when={data.isArchive} />
          <Posts when={data.isPostArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />

          <PageError when={data.isError} />

          <Timeline when={data.isTemporalEventsArchive} />
          <SubTimeline when={data.isTimelineType} />
          <Timelines when={data.isTimelines} />

        </Switch>

      </BodyWrapper>

      {display.global.showPromo && <GlobalPromo />}

      {display.global.showSocial && <GlobalSocial />}

      { /* ??? global sections promo + social stuff - implement conditional slots/fills ??? data.isHome && <Promo /> */}
      { /* display.showPromo && <Slot name="slot-1" /> */}

      <Footer />
    </>
  );
};

export default connect(Theme);

const HeadWrapper = styled.div`

  display: block;
  background-color: #87af4e;
  background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569316857/header/website_header_n1jxds.jpg) #87af4e;
  background-position-x: 10%;
  background-position-x: top;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    background: none;
  }

  @media screen and (min-width: 576px) {
    background: none;
    background-color: #87af4e;

    header a { margin-left: 1rem; }

    .container { background-position-x: 0; }
    
    .mast {
      background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569316857/header/website_header_n1jxds.jpg) #87af4e;
      background-position-x: 10%;
      background-position-y: top;
      background-repeat: no-repeat;
      background-size: auto;
    }
  }

@media screen and (min-width: 768px) {
  header a { margin-left: 20%; }
  h4 { font-size: 2rem; }
  .container { background-position-x: 5%; }
}

@media screen and (min-width: 992px) {
  header a { margin-left: 30%; }
  .container { background-position-x: 10%; }
}

@media screen and (min-width: 1200px) {
  header a { margin-left: 35%; }
  .container { background-position-x: 20%; }
}

`;

const BodyWrapper = styled.div`
  margin:0;
  padding: 0;
  display: block;

  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );

`;