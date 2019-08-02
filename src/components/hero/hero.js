import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { getYamlSectionData } from '../../lib/util';
import RichText from '../rich-text/rich-text';

const Hero = ({ path }) => {
  const query = useStaticQuery(
    graphql`
    {
      allPagesYaml(filter: {sections: {elemMatch: {type: {eq: "hero"}}}}) {
        edges {
          node {
            sections {
              type
              data {
                headline
                body
              }
            }
            path
          }
        }
      }
    }`,
  );

  const {
    headline,
    body,
  } = getYamlSectionData(query, path, 'hero');

  return (
    <section className="hero">
      <h1>{headline}</h1>
      <RichText>{body}</RichText>
    </section>
  );
};

Hero.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Hero;
