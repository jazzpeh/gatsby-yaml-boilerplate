import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Components from '..';
import Header from '../header/header';
import SEO from '../seo/seo';
import { getYamlNodeData } from '../../lib/util';
import './layout.scss';

const Layout = ({ data, location }) => {
  const { sections, path } = getYamlNodeData(data);

  return (
    <>
      <SEO path={path} location={location} />
      <Header />
      <main>
        {sections && sections.map(({ type }, i) => {
          const ComponentToRender = Components[type];
          if (!ComponentToRender) return null;
          return <ComponentToRender key={i} path={path} />;
        })}
      </main>
    </>
  );
};

Layout.propTypes = {
  data: PropTypes.shape({
    allPagesYaml: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          sections: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.string.isRequired,
          })).isRequired,
          path: PropTypes.string.isRequired,
        }).isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    href: PropTypes.string,
  }).isRequired,
};

export default Layout;

export const pageQuery = graphql`
  query($path: String!) {
    allPagesYaml(filter: {path: {eq: $path}}) {
      edges {
        node {
          sections {
            type
          }
          path
          meta {
            description
            title
          }
        }
      }
    }
  }
`;
