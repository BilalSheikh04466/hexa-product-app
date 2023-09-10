import React from 'react';
import {
    FacebookLogo,
    InstagramLogo,
    LinkedInLogo,
    YoutubeLogo,
} from '../../assets';
import { Divider, Typography } from '../../common';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.topSection}>
                <Typography variant="title-xs-medium" color="blue-primary">
                    Redefining Education Fundamentally
                </Typography>
                <div className={styles.socialsContainer}>
                    <a>
                        <img src={InstagramLogo} alt="instagram-link"></img>
                    </a>
                    <a>
                        <img src={FacebookLogo} alt="facebook-link"></img>
                    </a>
                    <a>
                        <img src={LinkedInLogo} alt="linkedin-link"></img>
                    </a>
                    <a>
                        <img src={YoutubeLogo} alt="youtube-link"></img>
                    </a>
                </div>
                <Typography variant="text-sm-regular" color="blue-primary">
                    Questions? Email us at{' '}
                    <a
                        className={styles.emailLink}
                        href="mailto:hexapapers@gmail.com"
                    >
                        hexapapers@gmail.com
                    </a>
                </Typography>
            </div>
            <Divider width="80%" color="light-grey" />
            <div className={styles.bottomSection}>
                <Typography variant="text-xs-regular" color="blue-primary">
                    Copyright © 2023 Hexa Inc. All rights reserved.
                </Typography>
            </div>
        </div>
    );
};
