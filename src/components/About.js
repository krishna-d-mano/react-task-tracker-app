import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h3>Version 1.0.0</h3>
      <h4>Click 'Add' to create a new event. Double click on an event to set/remove the reminder setting. If you no longer want an event displayed, click the delete icon.</h4>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About
