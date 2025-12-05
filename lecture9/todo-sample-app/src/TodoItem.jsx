const TodoItem = ({ todo = { text: 'Do something', isFinished: false }, onRemove, onToggle }) => {
  const itemStyle = {
    display: 'flex', alignItems: 'center',
    padding: 10,
    borderTop: '1px solid #dee2e6'
  }
  const checkboxStyle = { cursor: 'pointer' }
  const textStyle = { 
    flex: 1, 
    marginLeft: 10,
    textDecoration: todo.isFinished ? 'line-through' : 'none'
  }
  const btnStyle = { cursor: 'pointer' }
  const handleRemoveClick = () => {
    if (onRemove) onRemove(todo.id);
  }

  const handleToggleChange = () => {
    if (onToggle) onToggle(todo.id);
  }

  return (
    <div style={itemStyle}>
      <input type="checkbox" checked={todo.isFinished} onChange={handleToggleChange} style={checkboxStyle} />
      <div style={textStyle}>{todo.text}</div>
      <button style={btnStyle} onClick={handleRemoveClick}>削除</button>
    </div>
  )
}

export default TodoItem;