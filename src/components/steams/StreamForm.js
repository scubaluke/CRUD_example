import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'


class StreamForm extends Component {

    renderInput = ({ input, label, meta }) => {
        const className = `felid ${meta.error && meta.touched ?  'error' : ''}`
        return (
            <div className={className}>
                <label htmlFor={label}>{label}</label>
            <input autoComplete="off" {...input} type="text"/>
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }
    renderError({ error, touched }) {
        if (touched && error) {
            return(
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
}

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
              <Field label="Enter Title" name="title" component={this.renderInput} />
              <Field label="Enter Description"  name="description" component={this.renderInput} />
              <button className="ui button primary">Submit</button>
          </form>
        )
    }
}

const validate = formValues => {
    const errors = {}

    if (!formValues.title) {
        // ran if no title 
        errors.title = 'Please enter a title'
    }
    if (!formValues.description) {
        errors.description = 'Please enter a description'
    }
    return errors
}

export default  reduxForm({
    form: 'streamForm',
    validate
})(StreamForm) 

