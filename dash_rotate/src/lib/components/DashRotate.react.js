import PropTypes from "prop-types";
import React, {Component} from "react";
import styled from "styled-components";

const Message = styled.div`
  position: fixed;
  top: 0;
  height: 0;
  width: 100%;
  height: 100%;
`;

export default class DashRotate extends Component {
  constructor(props) {
    super(props);
    this.state = {orientation: this.getOrientation()};
  }

  /**
   * 画面向きを取得
   * @returns portrait／landscape
   */
  getOrientation() {
    let angle = screen && screen.orientation && screen.orientation.angle;
    if (angle === undefined) {
      angle = window.orientation; // iOS用
    }
    return angle === 0 ? "portrait" : "landscape";
  }

  componentDidMount() {
    window.addEventListener("orientationchange", () => {
      this.setState({orientation: this.getOrientation()});
      // reload
      if (this.props.reload) {
        let reload = false;
        switch (this.props.timing) {
          case "all":
            reload = true;
            break;
          case "match":
            reload = this.state.orientation === this.props.orientation;
          default:
            break;
        }
        const timeout = setTimeout(() => {
          location.reload();
          clearTimeout(timeout);
        }, this.props.delay);
      }
    });
  }

  render() {
    const {id, orientation, message} = this.props;
    let children;
    if (message && orientation && this.state.orientation !== orientation) {
      children = <Message className="dr-message">{message}</Message>;
    }
    return <div id={id}>{children}</div>;
  }
}

DashRotate.defaultProps = {
  reload: true,
  timing: "all",
  delay: 10,
};

DashRotate.propTypes = {
  id: PropTypes.string,
  orientation: PropTypes.string,
  message: PropTypes.node,
  reload: PropTypes.bool,
  timing: PropTypes.string, // all, match
  delay: PropTypes.number,
  setProps: PropTypes.func,
};
