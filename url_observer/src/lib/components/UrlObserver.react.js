import PropTypes from 'prop-types';
import {Component} from 'react';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
// const UrlObserver = (props) => {
//     const {id, pathname, setProps} = this.props;
//     useEffect(()=>{

//     })
//     return <div id={this.props.id}></div>;
// };
export default class UrlObserver extends Component {
    constructor(props) {
        super(props);
        this.state = {href: null};
        this.observer = null;
    }

    componentDidMount() {
        const _this = this;
        this.observer = new MutationObserver(function (mutations) {
            console.log('observer');
            _this.check();
        });
        this.observer.observe(document, {childList: true, subtree: true});

        history.replaceState(null, null, null);
        window.addEventListener('popstate', () => {
            console.log('popstate');
            this.check();
        });
    }

    componentWillUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    check() {
        if (this.state.href !== location.href) {
            console.log('URL', this.state.href + ' => ' + location.href);
            this.props.setProps({
                pathname: location.pathname,
            });
            this.setState({
                href: location.href,
            });
        }
    }

    render() {
        return <div id={this.props.id}></div>;
    }
}

UrlObserver.defaultProps = {};

UrlObserver.propTypes = {
    id: PropTypes.string,
    pathname: PropTypes.string,
    setProps: PropTypes.func,
};

// export default UrlObserver;
