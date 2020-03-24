import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <footer>
        <p>
            CopyRight &copy; 2019 | Designed With <span>
                <FontAwesomeIcon icon={faHeart} fixedWidth />
            </span> by <span>Amr Mohamed</span>
        </p>
        <div>
            Contact Me
            <ul>
                <li>
                    <span>
                        <FontAwesomeIcon icon={faFacebookF} fixedWidth />
                    </span>
                </li>

                <li>
                    <span>
                        <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
                    </span>
                </li>

                <li>
                    <span>
                        <FontAwesomeIcon icon={faTwitter} fixedWidth />
                    </span>
                </li>

                <li>
                    <span>
                        <FontAwesomeIcon icon={faInstagram} fixedWidth />
                    </span>
                </li>

            </ul>
        </div>
    </footer>
);


export default Footer;