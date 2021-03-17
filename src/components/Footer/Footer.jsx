import React from 'react';
import { Container } from 'react-bootstrap';
// import PortfolioContext from '../../context/context';
// eslint-disable-next-line no-unused-vars
import GithubButtons from '../GithubButtons/GithubButtons';

// import { githubButtons } from '../../mock/data';

const Footer = props => {
  // const { footer } = useContext(PortfolioContext);
  // const { networks } = footer;
  // const { isEnabled } = githubButtons;
  const {
    // eslint-disable-next-line react/prop-types
    profile: { socials },
  } = props;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <h1>Get In Touch</h1>
        <div className="social-links">
          {socials &&
            // eslint-disable-next-line react/prop-types
            socials.map(social => {
              const { id, type, url } = social;
              if (type.toLowerCase() !== 'issuu') {
                return (
                  <a
                    key={id}
                    href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={type}
                  >
                    <i className={`fa fa-${type.toLowerCase() || 'refresh'}`} />
                  </a>
                );
              }
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={type}
                >
                  issuu
                  {/* <i className={`fa fa-${type.toLowerCase() || 'refresh'}`} /> */}
                </a>
              );
            })}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
