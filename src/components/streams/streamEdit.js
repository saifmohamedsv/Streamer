import React from 'react';
import {connect} from "react-redux";
import {editStream, fetchStream} from "../../store/actions";
import StreamForm from "./streamForm";
import _ from 'lodash'

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        if (!this.props.stream) return 'loading'
        return (
            <div>
                <h1>Edit A Stream : {this.props.stream.id}</h1>
                <StreamForm
                    onSubmit={(values) => {
                        this.props.editStream(this.props.stream.id, values)
                    }}
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                />
                </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        stream: state.streams[parseInt(props.match.params.id)]
    }
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);