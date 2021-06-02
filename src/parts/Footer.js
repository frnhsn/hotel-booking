import React from 'react';
import Button from 'elements/Button';
import IconText from './IconText';

export default function Footer() {
    return (
        <footer className="container">
            <div className="row">
                <div className="col-4">
                    <IconText/>
                    <p className="brand-tagline">
                        We kaboom your beauty holiday instantly and memorable.
                    </p>
                </div>
                <div className="col-auto mr-5">
                    <h6 className="mt-2 mb-4">For Beginners</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type="link" href="/register">
                                New Account
                            </Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/properties">
                                Start booking a room
                            </Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/use-payments">
                                Use payments
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className="col-auto mr-5">
                    <h6 className="mt-2 mb-4">Explore us</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type="link" href="/register">
                                Our careers
                            </Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/properties">
                                Privacy
                            </Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/use-payments">
                                Terms and condition
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className="col-2 mr-5">
                    <h6 className="mt-2 mb-4">Connect us</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button isExternal type="link" href="mailto:support@staycation.id">
                                support@staycation.id
                            </Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="tel:+6225331111">
                                +62 21 533 1111
                            </Button>
                        </li>
                        <li className="list-group-item">
                            <span>Staycation, Kemang, Jakarta Selatan</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row my-4">
                <div className="col text-center copyrights">
                    Copyright 2021 • All right reserved •  Staycation
                </div>
            </div>
        </footer>
    )
}
