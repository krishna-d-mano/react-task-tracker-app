import { FaTrash } from 'react-icons/fa'

const Task = (props) => {
  // console.log(props)
  const { task, onDelete, onToggle } = props
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text}</h3>
      <h3>{task.day}<FaTrash style={{color: '#c4421d', cursor: 'pointer'}}
      onClick={() => onDelete(task.id)} /></h3>
      {/* <p>{task.reminder ? 'true' : 'false'}</p> */}
    </div>
  )
}

export default Task
