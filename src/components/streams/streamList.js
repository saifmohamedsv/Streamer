import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchStreams} from "../../store/actions";
import {Link} from "react-router-dom";

class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams()
    }


    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: "right"}}>
                    <Link className={"ui button primary"} to={"/streams/new"}>
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    renderEditButton(post) {
        if (this.props.currentUid === post.user_id) return (
            <div className={"right floated content"}>
                <Link to={`/streams/edit/${post.id}`} className={"ui button primary"}>EDIT</Link>
                <Link to={`/streams/delete/${post.id}`} className={"ui button negative"}>DELETE</Link>
            </div>
        )
    }

    renderList() {
        return this.props.streams.map((item) => (
            <div className={"item"} key={item.id}>
                {this.renderEditButton(item)}
                <i className={"large middle aligned icon camera"}/>
                <div className={"content"}>
                    <Link to={`/streams/show/${item.id}`} className={"header"}>
                        {item.title}
                    </Link>
                    <div className={"description"}>
                        {item.description}
                    </div>
                </div>
            </div>
        ))
    }

    render() {
        return (
            <div className={"ui celled list"}>
                {this.renderList()}
                {this.renderCreate()}
            </div>
        )
    }
}

export default connect((state) => ({
    streams: Object.values(state.streams),
    currentUid: state.auth.uid,
    isSignedIn: state.auth.isSignedIn
}), {fetchStreams})(StreamList);