import React from "react";
import { Row, Col } from "react-grid-system";
import { FaUser } from "react-icons/fa";
import "../styles/preview.scss";

const CardRow = ({ label, value }) => {
    return (
        <div className="card-row">
            <p className="label">{label}</p>
            <p className="value">{value}</p>
        </div>
    );
};

const PreviewHeader = props => {
    return (
        <div className="header">
            <h1>{props.name}</h1>
            <div className="profile">
                {!!props.imagePath ? (
                    <img src={props.imagePath} alt="Profile" />
                ) : (
                    <FaUser />
                )}
            </div>
        </div>
    );
};

const Preview = ({ details }) => {
    const addressLineOne = `${details.houseName} ${details.street}`;
    const addressLineTwo = `${details.suburb}${
        !!details.suburb && !!details.state ? "," : ""
    } ${details.state}`;

    return (
        <div className="preview">
            <h2 className="heading">hcard preview</h2>
            <div className="card">
                <PreviewHeader
                    name={`${details.givenName} ${details.surname}`}
                    imagePath={details.imagePath}
                />

                <div className="content">
                    <CardRow label="email" value={details.email} />
                    <CardRow label="phone" value={details.phone} />
                    <CardRow label="address" value={addressLineOne} />
                    <CardRow label="" value={addressLineTwo} />
                    <Row nogutter>
                        <Col xs={12}>
                            <CardRow
                                label="postcode"
                                value={details.postcode}
                            />
                        </Col>
                        <Col xs={12}>
                            <CardRow label="country" value={details.country} />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Preview;
