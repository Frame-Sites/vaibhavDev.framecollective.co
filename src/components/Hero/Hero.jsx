import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import getCDNUrl from '../../utils/cdn';

const Header = props => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // eslint-disable-next-line no-console
  const {
    // eslint-disable-next-line camelcase,react/prop-types
    profile: { first_name, last_name, intro, assets },
    // eslint-disable-next-line
    about
  } = props;

  // eslint-disable-next-line react/prop-types
  const [resumeObj] = assets.filter(asset => asset.type === 'resume');
  const resumeUrl = getCDNUrl(resumeObj.url, 'resume');

  // eslint-disable-next-line camelcase
  const fullName = `${first_name} ${last_name}`;
  // eslint-disable-next-line react/prop-types
  const { content } = intro[0];
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            <span className="text-color-main">{fullName}</span>
            <h1>
              <span className="text-color-main">{content}</span>
            </h1>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            {about ? (
              <a className="cta-btn cta-btn--hero" href="#about">
                Learn More
              </a>
            ) : (
              <a
                className="cta-btn cta-btn--hero"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            )}
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
