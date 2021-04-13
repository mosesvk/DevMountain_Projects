import React from 'react'

const Sidebar = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='sidebar-container' isOpen={isOpen} toggle={toggle}>
      <div></div>
      <div></div>
    </div>
  )
}

export default Sidebar
