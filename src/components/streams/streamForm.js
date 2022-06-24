import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";

class StreamForm extends Component {

    renderError({touched, error}) {
        if (touched && error)
            return (
                <div className={"ui error message"}>
                    <div className={"header"}>
                        {error}
                    </div>
                </div>
            )
    }

    renderInput = ({input, label, meta}) => {
        return (
            <div className={`field ${meta.error && meta.touched ? "error" : ""}`}>
                <label>{label}</label>
                <input {...input} autoComplete={"off"}/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (values) => {
        this.props.onSubmit(values)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={"ui form error"}>
                <Field name={"title"} type={"text"} label={"Enter Title"} component={this.renderInput}/>
                <Field name={"description"} type={"email"} label={"Enter Description"} component={this.renderInput}/>
                <button className={"ui button primary"} type={"submit"}>Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = "This Field is required*"
    }
    if (!formValues.description) {
        errors.description = "This Field is required*"
    }
    return errors;
}
export default reduxForm({form: 'streamForm', validate})(StreamForm)
