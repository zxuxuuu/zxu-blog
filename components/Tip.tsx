const Tip = ({ title, children }) => (
  <div
    style={{
      padding: '10px',
      backgroundColor: '#e7f5ff',
      border: '1px solid #91d5ff',
      borderRadius: '5px',
      marginBottom: '16px',
    }}
  >
    💡 <strong>{title || '提示：'}</strong> {children}
  </div>
)

export default Tip
