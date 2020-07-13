/*
Codeblock file nahezu übernommen von https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada
*/

import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';

export default class CodeBlock extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  };

  static defaultProps = {
    language: null,
  };

  render() {
    const { language, value }: any = this.props;

    return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
  }
}
