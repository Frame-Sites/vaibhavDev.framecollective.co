import React from 'react';
import { Helmet } from 'react-helmet';
import { ApolloProvider } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import client from '../apollo/client';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const GET_PROFILE = gql`
{
  getProfile (account_id: "${process.env.GATSBY_ACCOUNT_ID}") {
    dev
  }
}
`;

const Index = () => {
  const { loading, error, data } = useQuery(GET_PROFILE);
  if (loading) return <p>{loading}</p>;
  if (error) return <p>{error}</p>;

  const {
    getProfile: { dev },
  } = data;
  const profile = JSON.parse(dev);

  const fullName = `${profile.first_name} ${profile.last_name}`;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{fullName || 'Alex Theme'}</title>
        <html lang="en" />
        <meta name="description" content={fullName || 'Alex Theme | Frame Collective'} />
      </Helmet>
      <App profile={profile} />
    </>
  );
};

// eslint-disable-next-line react/prefer-stateless-function
class Root extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Index />
      </ApolloProvider>
    );
  }
}

export default Root;
