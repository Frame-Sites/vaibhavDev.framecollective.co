import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
// import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const App = props => {
  const {
    // eslint-disable-next-line react/prop-types
    profile,
  } = props;
  // eslint-disable-next-line no-console,react/prop-types
  const { experience, leadership, education, articles, socials } = profile;
  // eslint-disable-next-line react/prop-types
  const about = experience.length || leadership.length || education.length;
  return (
    <>
      <Hero profile={profile} about={about} />
      {/* eslint-disable-next-line react/prop-types */}
      {about ? <About profile={profile} /> : <></>}
      {/* eslint-disable-next-line react/prop-types */}
      {articles.length ? <Projects profile={profile} /> : <></>}
      {/* eslint-disable-next-line react/prop-types */}
      {socials.length ? <Footer profile={profile} /> : <></>}
    </>
  );
};

export default App;
