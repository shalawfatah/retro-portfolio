import React from 'react'
import {Droppable} from 'react-beautiful-dnd';

const Drop = ({children, droppableId}) => {
  return (
    <Droppable droppableId={droppableId}>
    {(provided) => (
      <div className={droppableId} {...provided.droppableProps} ref={provided.innerRef}>
        {children}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
  )
}

export default Drop