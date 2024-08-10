import React, { useState, useEffect } from 'react';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const savedInput = params.get('input');
    if (savedInput) {
      setInput(decodeURIComponent(savedInput));
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (input) {
      params.set('input', encodeURIComponent(input));
      window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }
  }, [input]);

  const handleShareClick = () => {
    setIsModalOpen(true);
  };

  const handleCopyMarkdown = () => {
    const textarea = document.createElement('textarea');
    textarea.value = input;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Markdown copied to clipboard!');
    setIsModalOpen(false);
  };

  const handleShareUrl = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('URL copied to clipboard!');
      setIsModalOpen(false);
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', padding: '20px', boxSizing: 'border-box' }}>
      <header style={{ padding: '10px', backgroundColor: '#282c34', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '8px', width: '100%', boxSizing: 'border-box' }}>
        <h1 style={{ margin: 0 }}>README Generator</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <select onChange={() => {}} value="Advanced" style={{ fontSize: '16px', marginRight: '10px' }}>
            <option value="Advanced">Advanced</option>
          </select>
          <button onClick={handleShareClick} style={{ backgroundColor: '#352f36', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Share Markdown</button>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', gap: '20px', boxSizing: 'border-box', width: '100%' }}>
        <MarkdownEditor input={input} onInputChange={setInput} />
        <div style={{ display: 'flex', gap: '20px', height: 'calc(100vh - 250px)' }}>
          <MarkdownPreview input={input} />
        </div>
      </div>

      {isModalOpen && (
        <div style={{
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center'
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '8px', 
            width: '300px', 
            textAlign: 'center' 
          }}>
            <h2>Share Markdown</h2>
            <button onClick={handleCopyMarkdown} style={{ 
              padding: '10px', 
              margin: '10px 0', 
              width: '100%', 
              borderRadius: '5px', 
              backgroundColor: '#352f36', 
              color: 'white', 
              border: 'none', 
              cursor: 'pointer'
            }}>Copy Markdown</button>
            <button onClick={handleShareUrl} style={{ 
              padding: '10px', 
              margin: '10px 0', 
              width: '100%', 
              borderRadius: '5px', 
              backgroundColor: '#352f36', 
              color: 'white', 
              border: 'none', 
              cursor: 'pointer'
            }}>Copy Shareable URL</button>
            <button onClick={handleCloseModal} style={{ 
              padding: '10px', 
              margin: '10px 0', 
              width: '100%', 
              borderRadius: '5px', 
              backgroundColor: '#ccc', 
              color: 'black', 
              border: 'none', 
              cursor: 'pointer'
            }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
