import React from 'react';
import { buttonStyle, textareaStyle } from '../config/design';
import { markdownElements } from '../config/elements';

interface MarkdownEditorProps {
  input: string;
  onInputChange: (input: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ input, onInputChange }) => {
  const handleMarkdownElementClick = (markdown: string) => {
    onInputChange(input + markdown);
  };

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingBottom: '10px' }}>
        {markdownElements.map((element, index) => (
          <button
            key={index}
            onClick={() => handleMarkdownElementClick(element.markdown)}
            style={buttonStyle}
          >
            {element.label}
          </button>
        ))}
      </div>
      <textarea
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Enter text here"
        style={textareaStyle}
      />
    </div>
  );
};

export default MarkdownEditor;
