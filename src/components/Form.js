import React from "react";
import { Col, Row } from "react-grid-system";

import "../styles/form.scss";

const Field = props => {
    const { label, type = "text", name, value, onChange, ...rest } = props;

    return (
        <Col xs={12} md={6}>
            <div className="form-field">
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    id={name}
                    name={name}
                    onChange={onChange}
                    value={value}
                    {...rest}
                />
            </div>
        </Col>
    );
};

const Form = ({ details, onChange, onUploadFile }) => {
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
            }}
        >
            <h3 className="subheading">Personal details</h3>
            <Row>
                <Field
                    label="given name"
                    name="givenName"
                    value={details.givenName}
                    onChange={onChange}
                />
                <Field
                    label="surname"
                    name="surname"
                    value={details.surname}
                    onChange={onChange}
                />
            </Row>
            <Row>
                <Field
                    label="email"
                    type="email"
                    name="email"
                    value={details.email}
                    onChange={onChange}
                />
                <Field
                    label="phone"
                    name="phone"
                    value={details.phone}
                    onChange={onChange}
                />
            </Row>

            <h3 className="subheading">Address</h3>
            <Row>
                <Field
                    label="house name or #"
                    name="houseName"
                    value={details.houseName}
                    onChange={onChange}
                />
                <Field
                    label="street"
                    name="street"
                    value={details.street}
                    onChange={onChange}
                />
            </Row>
            <Row>
                <Field
                    label="suburb"
                    name="suburb"
                    value={details.suburb}
                    onChange={onChange}
                />
                <Field
                    label="state"
                    name="state"
                    value={details.state}
                    onChange={onChange}
                />
            </Row>
            <Row>
                <Field
                    label="postcode"
                    name="postcode"
                    value={details.postcode}
                    onChange={onChange}
                    maxLength={4}
                />
                <Field
                    label="country"
                    name="country"
                    value={details.country}
                    onChange={onChange}
                />
            </Row>

            <Row className="button-group">
                <Col xs={12} md={6}>
                    <label className="file-button">
                        Upload Avatar
                        <input
                            type="file"
                            onChange={onUploadFile}
                            accept="image/x-png,image/jpeg"
                        />
                    </label>
                </Col>
                <Col xs={12} md={6}>
                    <button className="form-button" type="submit">
                        Create hCard
                    </button>
                </Col>
            </Row>
        </form>
    );
};

export default Form;
