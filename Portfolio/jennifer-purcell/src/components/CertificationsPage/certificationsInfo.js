import React from "react";
import Title from "../Title";
import aws from "../../images/aws.jfif"

export default function CertificationsInfo() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="certifications in progress" />
                        <p className="text-lead tex=t-muted my-3">
                            <img src={aws} alt="aws" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
