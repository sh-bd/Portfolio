import React from 'react';
import { Col } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const FindMeOn = () => {
    return (
        <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
                Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
                <li className="social-icons">
                    <a
                        href="https://github.com/sh-bd"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                        <AiFillGithub />
                    </a>
                </li>
                <li className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/sh4mim"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                        <FaLinkedinIn />
                    </a>
                </li>
            </ul>
        </Col>
    );
};

export default FindMeOn;