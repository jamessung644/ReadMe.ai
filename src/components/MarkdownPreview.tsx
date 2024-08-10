import React, { useEffect } from 'react';
import showdown from 'showdown';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';  // VS Code 스타일에 가까운 테마

import { previewStyle } from '../config/design';

interface MarkdownPreviewProps {
  input: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ input }) => {
  const converter = new showdown.Converter({
    ghCodeBlocks: true, // GitHub 스타일의 코드 블록 지원
  });

  const html = converter.makeHtml(input);

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
  }, [html]);

  return (
    <div
      style={previewStyle}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default MarkdownPreview;
