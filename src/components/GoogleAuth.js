import React, {Component} from "react";
import {connect} from "react-redux";
import {signIn, signOut} from "../store/actions";

class GoogleAuth extends Component {
    constructor(props) {
        super(props);
    }

    state = {isSignedIn: null};

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId:
                        "35413848644-oogodrvibkl6o3pcdr02f8hg2k8e2p7g.apps.googleusercontent.com",
                    scope: "email",
                    plugin_name: "Streamy-2",
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChanged(this.auth.isSignedIn.get())
                    this.auth.isSignedIn.listen(this.onAuthChanged);
                });
        });
    }

    onAuthChanged = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    };

    signIn = () => {
        this.auth.signIn();
    };

    signOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <button className="ui green google button">
                    <i className="google icon">Sign In</i>
                </button>
            );
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.signOut} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.signIn} className="ui green google button">
                    <i className="google icon"/>
                    Sign In
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
