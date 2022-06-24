import React from 'react';
import Modal from "../Modal";
import history from "../../history";
import {connect} from "react-redux";
import {deleteStream, fetchStream} from "../../store/actions";
import {Link} from "react-router-dom";

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onDeleteStream = (id) => {
        this.props.deleteStream(id)
    }

    renderActions = () => {
        return (<>
                <button className={"ui button negative"}
                        onClick={() => this.onDeleteStream(this.props.stream.id)}>DELETE
                </button>
                <Link to={"/"} className={"ui button"}>CANCEL</Link>
            </>)
    }

    render() {
        if (!this.props.stream) return "loading.."
        return <Modal
            onClose={() => history.push('/')}
            title={"Delete a stream"}
            message={`Are you sure you want delete this stream?`}
            actions={this.renderActions}
        />
    }
};

export default connect((state, props) => ({stream: state.streams[props.match.params.id]}), {
    fetchStream, deleteStream
})(StreamDelete);