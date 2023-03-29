import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

const dragging_classes = 'bg-indigo-200'

const Drag = ({children, specialId, index}) => {
  return (
        <Draggable key={specialId} draggableId={specialId} index={index}>
          {(provided, snapshot) => {
          return <div className={`${snapshot.isDragging ? dragging_classes : ''}`}  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {children}
                 </div>
          }}
        </Draggable>
  )
}

export default Drag