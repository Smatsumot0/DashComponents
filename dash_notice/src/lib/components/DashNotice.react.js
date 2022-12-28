import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {FaBell} from 'react-icons/fa';
import styled from 'styled-components';

/* -----------------------------------------------------------
 * Style
 * -----------------------------------------------------------*/
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Icon = styled.div.attrs((props) => ({
    iconColor: props.iconColor,
}))`
    width: 30px;
    height: 30px;
    position: relative;

    svg {
        width: 100%;
        height: 100%;
        color: ${(props) => props.iconColor};
    }
`;

const Badge = styled.span.attrs((props) => ({
    color: props.color,
    badgeColor: props.badgeColor,
    borderColor: props.borderColor,
}))`
    width: 1.2em;
    height: 1.2em;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: -0.3em;
    background-color: ${(props) => props.badgeColor};
    border-radius: 50%;
    border: solid 2px ${(props) => props.borderColor};
    color: ${(props) => props.color};
    font-size: 0.7em;
    line-height: 1;
    box-sizing: content-box;
`;

const NoticeBOX = styled.div.attrs((props) => ({
    position: props.position,
    bgColor: props.bgColor,
    borderColor: props.borderColor,
    duration: props.duration,
}))`
    position: absolute;
    top: 50%;
    ${(props) => props.position}: 50%;
    transform-origin: top right;
    transition: transform ${(props) => props.duration}ms;
    padding-top: calc(50% + 10px);

    ul {
      height: 300px;
      overflow-y: scroll;
      margin: 0;
      margin-${(props) => props.position}: -10px;
      padding: 5px 0;
      list-style: none;
      background-color: ${(props) => props.bgColor};
      color: ${(props) => props.color};
      border: solid 2px ${(props) => props.borderColor};
      border-radius: 10px;
      // scroll
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar{
        display: none;
      }
    }

    li {
        display: flex;
        flex-direction: column;
        padding: 5px 10px;

        &:not(:first-of-type) {
            border-top: solid thin ${(props) => props.borderColor};
        }
    }
`;

const NoticeP = styled.p`
    margin: 0;
    line-height: 1;
`;

const NoticeTitle = styled(NoticeP).attrs((props) => {
    color: props.color;
})`
    color: ${(props) => props.color};
    font-size: 0.85em;
`;

const NoticeMessage = styled(NoticeP)`
    width: 10em;
    padding: 10px 0 10px 0.7em;
`;

const NoticeTime = styled(NoticeP).attrs((props) => {
    color: props.color;
})`
    color: ${(props) => props.color};
    font-size: 0.7em;
    margin-left: auto;
`;

/* -----------------------------------------------------------
 * Component
 * -----------------------------------------------------------*/
export default class DashNotice extends Component {
    constructor(props) {
        super(props);
        const timeout =
            new Date('2000/1/1 ' + this.props.timeout).getTime() -
            new Date('2000/1/1 00:00:00').getTime();
        this.state = {isOpen: false, timeout, timestamp: new Date()};
        this.isDisplayed = false;
        this.key = 'dn-' + this.props.id;

        // delete
        switch (this.props.remove_timing) {
            case 'timeout':
                this.deleteTimeout();
            case 'length':
                this.deleteLength();
        }

        // set
        let notices = JSON.parse(sessionStorage.getItem(this.key));
        if (!notices) notices = [];
        notices = Array.from(new Set(notices.concat(this.props.notices)));
        console.log(notices);
        this.props.setProps({notices});
        this.sort();

        // bind
        this.open = this.open.bind(this);
    }

    /**
     * ソート
     */
    sort() {
        if (this.props.sort === 'asc') {
            this.props.notices.sort((a, b) =>
                a.timestamp > b.timestamp ? 1 : -1
            );
        } else {
            this.props.notices.sort((a, b) =>
                a.timestamp < b.timestamp ? 1 : -1
            );
        }
    }

    /**
     * 経過時間がtimeoutより大きいものを削除
     */
    deleteTimeout() {
        const {notices, setProps} = this.props;
        const newNotices = [];
        let isDelete = false;
        for (const notice of notices) {
            const passed = Date.now() - new Date(notice.timestamp).getTime();
            if (passed < this.state.timeout) {
                newNotices.push(notice);
            } else {
                isDelete = true;
            }
        }
        if (isDelete) {
            setProps({notices: newNotices});
        }
    }

    /**
     * max_lengthより多くなった場合、古い方から削除
     */
    deleteLength() {
        const {notices, max_length, setProps} = this.props;
        if (notices.length > max_length) {
            if (this.props.sort === 'asc') {
                setProps({
                    notices: notices.slice(
                        notices.length - max_length,
                        notices.length
                    ),
                });
            } else {
                setProps({notices: notices.slice(0, max_length)});
            }
        }
    }

    componentDidMount() {
        this.sort();
        setInterval(() => {
            this.setState({timestamp: new Date()});
            if (this.props.remove_timing === 'timeout') {
                const _this = this;
                _this.deleteTimeout();
            }
        }, 10000);
    }

    componentDidUpdate() {
        if (this.props.notices.length > 0) {
            // 削除タイミング
            switch (this.props.remove_timing) {
                case 'timeout':
                    this.deleteTimeout();
                    break;
                case 'length':
                    this.deleteLength();
                    break;
                default:
                    break;
            }
        }
        sessionStorage.setItem(this.key, JSON.stringify(this.props.notices));
    }

    /**
     * 通知ボックス開閉
     */
    open() {
        if (this.props.notices.length === 0) {
            this.setState({isOpen: false});
        } else {
            this.setState({isOpen: !this.state.isOpen});
        }
    }

    /**
     * 通知アイテムが選択された場合、アイテムのvalueを返す
     * @param {*} value
     */
    select(value) {
        this.props.setProps({value});
        // 該当の通知を削除
        if (this.props.remove_timing === 'check') {
            const newNotices = this.props.notices.filter(
                (x) => x.value !== value
            );
            setTimeout(() => {
                this.props.setProps({notices: newNotices});
            }, this.props.duration + 10);
        }
    }

    /**
     * 経過時間
     * @param {*} timestamp
     * @returns
     */
    getPassed(timestamp) {
        const ms = Date.now() - new Date(timestamp).getTime();
        const min = Math.floor(ms / 1000 / 60) % 60;
        const hours = Math.floor(ms / 1000 / 60 / 60) % 24;
        const days = Math.floor(ms / 1000 / 60 / 60 / 24);

        const passed = [];
        if (days) passed.push(days + 'days');
        if (hours) passed.push(hours + 'hours');
        if (min) passed.push(min + 'minutes');
        if (passed.length === 0) passed.push('0minutes');
        passed.push('ago');
        return passed.join(' ');
    }

    /**
     * 通知ボックスのアイテム
     * @param {*} notice データ
     * @returns
     */
    item(notice) {
        const passed = this.getPassed(notice.timestamp);
        return (
            <li
                key={notice.timestamp}
                onClick={() => this.select(notice.value)}
            >
                <NoticeTitle
                    className="dn-title"
                    color={this.props.border_color}
                >
                    {notice.title}
                </NoticeTitle>
                <NoticeMessage className="dn-content">
                    {notice.message}
                </NoticeMessage>
                <NoticeTime className="dn-time" color={this.props.border_color}>
                    {passed}
                </NoticeTime>
            </li>
        );
    }

    render() {
        const {
            id,
            notices,
            icon_color,
            color,
            badge_color,
            border_color,
            position,
            duration,
        } = this.props;

        const list = [];
        for (const notice of notices) {
            list.push(this.item(notice));
        }

        return (
            <div id={id} className="dash-notice">
                <Icon
                    iconColor={icon_color}
                    className="dn-icon"
                    onClick={this.open}
                >
                    <Background
                        style={{display: this.state.isOpen ? 'block' : 'none'}}
                    />
                    <FaBell />
                    <Badge
                        color={icon_color}
                        badgeColor={badge_color}
                        borderColor={color}
                        style={{display: notices.length > 0 ? 'flex' : 'none'}}
                    >
                        {notices.length}
                    </Badge>
                    <NoticeBOX
                        position={position}
                        bgColor={icon_color}
                        color={color}
                        borderColor={border_color}
                        duration={duration}
                        style={{
                            transform:
                                'scale(' + (this.state.isOpen ? 1 : 0) + ')',
                        }}
                    >
                        <ul>{list}</ul>
                    </NoticeBOX>
                </Icon>
            </div>
        );
    }
}

DashNotice.defaultProps = {
    notices: [],
    remove_timing: 'check',
    max_length: 10,
    timeout: '00:30:00',
    icon_color: 'black',
    color: 'white',
    badge_color: 'red',
    border_color: 'gray',
    position: 'right',
    duration: 300,
    sort: 'desc',
};

DashNotice.propTypes = {
    id: PropTypes.string.isRequired,
    notices: PropTypes.arrayOf(PropTypes.object),
    remove_timing: PropTypes.string, // check or timeout or length
    max_length: PropTypes.number,
    timeout: PropTypes.string,
    icon_color: PropTypes.string,
    color: PropTypes.string,
    badge_color: PropTypes.string,
    border_color: PropTypes.string,
    position: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    duration: PropTypes.number,
    sort: PropTypes.string,
    setProps: PropTypes.func,
};
