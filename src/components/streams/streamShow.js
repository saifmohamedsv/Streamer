import React from 'react';
import {connect} from "react-redux";
import {fetchStream} from "../../store/actions";
import flv from 'flv.js'

class StreamShow extends React.Component {

    constructor(props) {
        super(props);
        this.videoRef = React.createRef()
    }

    componentDidMount() {
        const {id: streamID} = this.props.match.params
        this.props.fetchStream(streamID)
        this.buildPlayer(streamID)
    }

    componentDidUpdate() {
        const {id: streamID} = this.props.match.params
        this.buildPlayer(streamID)
    }


    componentWillUnmount() {
        this.player.destroy()
    }

    buildPlayer(streamID) {
        if (this.player || !this.props.stream) {
            return;
        }
        this.player = flv.createPlayer({
            type: "flv",
            name: "streamer",
            url: `http://localhost:8000/live/${streamID}.flv`
        })
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
    }

    render() {
        if (!this.props.stream) return <div>Loading...</div>
        const {title, description} = this.props.stream;
        return (
            <div>
                <video ref={this.videoRef} style={{width: "100%"}} controls/>
                <h1 className={"ui header"}>{title}</h1>
                <h5 className={"description"}>{description}</h5>
            </div>
        );
    }
}


export default connect((state, ownProps) => ({stream: state.streams[ownProps.match.params.id]}), {fetchStream})(StreamShow);