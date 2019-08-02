import { Link, graphql, StaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ data }) => (
  <header className="header">
    <div className="header__container">
      <h1 className="header__headline">
        <Link
          to="/"
          className="header__brand"
        >
          {data.site.siteMetadata.title}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
);
