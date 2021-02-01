import React from 'react';

function HtmlContent({children, className}) {
  return (
    <div
      className={`HtmlContent ${className || ''}`}
      dangerouslySetInnerHTML={{__html: children}}
    />
  );
}

export default HtmlContent;
