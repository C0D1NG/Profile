import React from 'react'
import Title from '../Title'

export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact" />
                    <form className="mt-5" action="https://formspree.io/cassiopeia5571@gmail.com"
                        method="POST">
                        {/*first*/}
                        <div className="form-group">
                            <input type="text" name="name"
                                className="form-control" placeholder="name" />
                        </div>
                        {/*email*/}
                        <div className="form-group">
                            <input type="email" name="email"
                                className="form-control" placeholder="emailaddress@email.com" />
                        </div>
                        {/*subject*/}
                        <div className="form-group">
                            <input type="text" name="subject"
                                className="form-control" placeholder="subject" />
                        </div>
                        {/*message*/}
                        <div className="form">
                            <textarea name="message" className="form-control"
                                rows="10" placeholder="I am reaching out to you today because . . ." />
                        </div>
                        {/*submit*/}
                        <div className="form-group mt-3">
                            <input type="submit" value="Send" className="form-control bg-primary text-white" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
