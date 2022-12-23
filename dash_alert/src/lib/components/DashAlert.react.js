import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

const BORDER_TRANSPARENT = '99';
const BACKGROUND_TRANSPARENT = '99';

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from{
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Background = styled.div.attrs((props) => ({
    duration: props.duration,
    isFadeout: props.isFadeout,
}))`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${'#000000' + BACKGROUND_TRANSPARENT};
    padding: 50px;
    box-sizing: border-box;
    animation: ${(props) => (props.isFadeout ? fadeOut : fadeIn)} ease-in-out
        ${(props) => props.duration}ms forwards;
`;

const Alert = styled.div`
    padding: 15px 0 20px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Title = styled.div`
    border-bottom: solid thin black;
    padding: 5px 30px;
`;

const Message = styled.div`
    padding: 10px 30px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 0 30px;
    box-sizing: content-box;
`;

const Button = styled.button`
    flex: 1;
    padding: 3px 0;
    background-color: ${'#000000' + BACKGROUND_TRANSPARENT};
    border-radius: 9999px;
    border: solid thin ${'#000000' + BORDER_TRANSPARENT};
    color: white;
`;

export default class DashAlert extends Component {
    constructor(props) {
        super(props);
        this.buttons = this.props.buttons;
        this.maxCount = this.getMaxCount();
        this.state = {isFadeout: false};
        this.timeoutID = null;
    }

    /**
     * ボタンがクリックされた場合の動作
     * @param {*} value ボタンのvalue
     */
    click(value) {
        console.log('-- ON CLICK', value);
        this.setState({isFadeout: true});
        if (!this.timeoutID) {
            this.timeoutID = setTimeout(() => {
                this.setState({isFadeout: false});
                this.props.setProps({value, is_open: false});
                clearTimeout(this.timeoutID);
                this.timeoutID = null;
            }, this.props.duration + 100);
        }
    }

    /**
     * ボタンの最大文字数を取得
     * @returns 最大文字数
     */
    getMaxCount() {
        let cnt = 0;
        for (const btn of this.buttons) {
            cnt = Math.max(cnt, btn.title.length);
        }
        return cnt;
    }

    componentDidUpdate() {
        // 最大文字数設定
        if (
            JSON.stringify(this.buttons) !== JSON.stringify(this.props.buttons)
        ) {
            this.buttons = this.props.buttons;
            this.maxCount = this.getMaxCount();
        }

        // 開くときに値をリセット
        if (this.props.is_open) {
            if (this.props.value || this.props.value == 0) {
                this.props.setProps({value: null});
            }
        }
    }

    render() {
        console.log(this.state.isFadeout);
        const {id, message, title, buttons, duration, is_open} = this.props;

        const children = [];
        // タイトル
        if (title) {
            children.push(<Title className="da-title">{title}</Title>);
        }

        // メッセージ
        children.push(<Message className="da-msg">{message}</Message>);

        // ボタン
        const btns = [];
        for (const btn of buttons) {
            const style = {maxWidth: 'calc(' + this.maxCount + 'em + 50px)'};
            if (btn.color) {
                style.backgroundColor = btn.color + BACKGROUND_TRANSPARENT;
                style.borderColor = btn.color + BORDER_TRANSPARENT;
            }
            btns.push(
                <Button
                    type="button"
                    key={btn.value}
                    onClick={() => this.click(btn.value)}
                    style={style}
                >
                    <span>{btn.title}</span>
                </Button>
            );
        }

        children.push(
            <ButtonWrapper className="da-button-wrapper">{btns}</ButtonWrapper>
        );

        return (
            <div id={id} style={{display: is_open ? 'block' : 'none'}}>
                <Background
                    className="da-background"
                    duration={duration}
                    isFadeout={this.state.isFadeout}
                >
                    <Alert className="da-alert">{children}</Alert>
                </Background>
            </div>
        );
    }
}

DashAlert.defaultProps = {
    is_open: false,
    duration: 150,
};

DashAlert.propTypes = {
    id: PropTypes.string,
    message: PropTypes.node.isRequired,
    title: PropTypes.node,
    buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    is_open: PropTypes.bool,
    duration: PropTypes.number,
    output_target: PropTypes.any,
    setProps: PropTypes.func,
};
