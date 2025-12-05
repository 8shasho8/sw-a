const TodoInput = () => {
  const formStyle = {
    display: 'flex',
  }

  const inputStyle = {
    backgroundColor: 'darkgrey',
    border: 'none',
    outline: 'none',
    fontSize: 16,
    color: 'white',
    lineHeight: 2,
    flex: 1,
  }

  const btnStyle = {
    backgroundColor: 'dimgrey',
    border: 'none',
    color: 'white',
    fontSize: 16,
    cursor: 'pointer',
    paddingLeft: 15,
    paddingRight: 15,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input style={inputStyle} placeholder="タスクを入力してください" />
      <button style={btnStyle} type="submit">追加</button>
    </form>
  )
}

export default TodoInput
