import React from 'react';
import PropTypes from 'prop-types';

const RichText = ({
  children,
  tag,
}, props) => {
  const Tag = tag;

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <Tag {...props} dangerouslySetInnerHTML={{ __html: children }} />
    </>
  );
};

RichText.defaultProps = {
  children: '',
  tag: 'p',
};

RichText.propTypes = {
  children: PropTypes.string,
  tag: PropTypes.string,
};

export default RichText;
