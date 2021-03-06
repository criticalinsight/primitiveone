// updated 06/03/20, based on src: https://github.com/frontity/frontity/blob/dev/packages/twentytwenty-theme/src/components/link.js
import React, { useEffect } from "react";
import { connect } from "frontity";

/*
import facepaint from 'facepaint'

const mq = facepaint([
    '@media(min-width: 420px)',
    '@media(min-width: 720px)'
  ])

  const Link = styled.a(props =>
    mq({
      display: 'block',
      margin: 18,
      padding: 24,
      color: props.blue
        ? ['powderblue', 'blue', 'midnightblue']
        : ['lightgray', 'gray', 'slategray'],
      backgroundColor: 'currentColor'
    })
  )
  */


const Link = ({ state, actions, link, className, children, rel, "aria-current": ariaCurrent, onClick: onClickProp }) => {

  //sk-dev: console.log("@link: link", link);

  // Check if the link is an external or internal link
  const isExternal = link.startsWith("http");

  // Prefetch the link's content when it mounts and autoPreFetch is set to `true`
  useEffect(() => {
    if (!isExternal) {
      if (state.theme.autoPreFetch === "all") actions.source.fetch(link);
    }
  }, []);

  const onClick = event => {

    //sk-dev: console.log("@linkOnClick: link", link);

    // Do nothing if it's an external link
    if (isExternal) return;

    event.preventDefault();
    // Set the router to the new url.
    actions.router.set(link);

    // Scroll the page to the top
    window.scrollTo(0, 0);

    // if the menu modal is open, close it so it doesn't block rendering
    if (state.theme.isMobileMenuOpen) {
      actions.theme.closeMobileMenu();
    }

    if (onClickProp) {
      onClickProp(event);
    }
  };

  return (
    <a
      href={link}
      onClick={onClick}
      className={className}
      aria-current={ariaCurrent}
      rel={isExternal ? "noopener noreferrer" : rel}
      onMouseEnter={() => {
        // Prefetch the link's content when the user hovers on the link
        if (state.theme.autoPreFetch === "hover" && !isExternal)
          actions.source.fetch(link);
      }}
    >
      {children}
    </a>
  );
};

export default connect(Link);
