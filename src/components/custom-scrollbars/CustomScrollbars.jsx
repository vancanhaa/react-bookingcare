import React, { Component, useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import "./custom-scrollbars.scss";

function CustomScrollbars({
  style,
  quickScroll,
  className,
  disableVerticalScroll,
  disableHorizontalScroll,
  children,
  ...otherProps
}) {
  const scrollbarRef = useRef();
  const scrollbars = scrollbarRef.current;
  const getScrollLeft = () => scrollbars.getSCrollLeft();
  const getScrollTop = () => scrollbars.getScrollTop();
  const scrollToBottom = () => {
    if (!scrollbarRef || !scrollbars) return;
    const targetScrollTop = scrollbars.getScrollHeight();
    scrollTo(targetScrollTop);
  };
  const scrollTo = (targetTop) => {
    if (!scrollbarRef || scrollbars) return;

    const originalTop = scrollbars.getScrollTop();
    let iteration = 0;
    const scroll = () => {
      iteration++;
      if (iteration > 30) {
        return;
      }
      scrollbars.scrollTop(
        originalTop + ((targetTop - originalTop) / 30) * iteration
      );

      if (quickScroll && quickScroll === true) {
        scroll();
      } else {
        setTimeout(() => {
          scroll();
        }, 20);
      }
    };
    scroll();
  };
  const renderTrackHorizontal = (props) => {
    return <div {...props} className="track-horizontal"></div>;
  };
  const renderTrackVertical = (props) => {
    return <div {...props} className="track-vertical"></div>;
  };
  const renderThumbHorizontal = (props) => {
    return <div {...props} className="thumb-horizontal"></div>;
  };
  const renderThumbVertical = (props) => {
    return <div {...props} className="thumb-vertical"></div>;
  };
  const renderNone = (props) => {
    return <div></div>;
  };

  return (
    <Scrollbars
      style={style}
      ref={scrollbarRef}
      autoHide={true}
      autoHideTimeout={200}
      hideTracksWhenNotNeeded={true}
      className={
        className ? className + " custom-scrollbar" : "custom-scrollbar"
      }
      {...otherProps}
      renderTrackHorizontal={
        disableHorizontalScroll ? renderNone : renderTrackHorizontal
      }
      renderTrackVertical={
        disableVerticalScroll ? renderNone : renderTrackVertical
      }
      renderThumbHorizontal={
        disableHorizontalScroll ? renderNone : renderThumbHorizontal
      }
      renderThumbVertical={
        disableVerticalScroll ? renderNone : renderThumbVertical
      }
    >
      {children}
    </Scrollbars>
  );
}

export default CustomScrollbars;
