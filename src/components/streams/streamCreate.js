import React, {Component} from 'react';
import StreamForm from "./streamForm";
import {connect} from "react-redux";
import {createStream} from "../../store/actions";

class StreamCreate extends Component {

    render() {
        return (
            <div>
                <h1>Create Stream</h1>
                <StreamForm onSubmit={this.props.createStream}/>
            </div>
        );
    }
}


export default connect(null, {createStream})(StreamCreate);