const Tip = ({ title, children }) => (
  <div className="mb-4 rounded-md border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
    💡 <strong>{title || '提示：'}</strong> {children}
  </div>
)

export default Tip
