import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { getYamlNodeData } from '../../lib/util';

const SEO = ({ path, lang, location }) => {
  const { site, allPagesYaml } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
          }
        }
        allPagesYaml {
          edges {
            node {
              path
              meta {
                description
                title
                image
                type
              }
            }
          }
        }
      }
    `,
  );

  const {
    description,
    title,
    type,
    image,
  } = getYamlNodeData({ allPagesYaml }, path);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: image || site.siteMetadata.image,
        },
        {
          property: 'og:type',
          content: type || 'website',
        },
        {
          property: 'og:url',
          content: location.href,
        },
      ]}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
};

SEO.propTypes = {
  lang: PropTypes.string,
  location: PropTypes.shape({
    href: PropTypes.string,
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export default SEO;
