// src/config/design.ts

export const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#352f36',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textAlign: 'center',
  flex: '1 1 19%'
};

export const textareaStyle = {
  width: '100%',
  height: 'calc(100vh - 250px)',
  padding: '20px',
  fontSize: '16px',
  fontFamily: 'monospace',  // 코드 편집기용 폰트 (monospace)
  boxSizing: 'border-box',
  backgroundColor: '#ffffff',
  border: '1px solid #ccc',
  borderRadius: '8px',
  color: '#352f36',
  resize: 'none'
};

export const previewStyle = {
  flex: 1,
  height: '100%',
  padding: '20px',
  backgroundColor: '#ffffff',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxSizing: 'border-box',
  overflowY: 'auto',
  color: '#352f36',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  lineHeight: '1.6'
};
