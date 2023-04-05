import "./App.css";
import { React, useEffect, useState, Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`

  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ["drag1", "drag2", "drag3"]
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {   
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  render() {
    return (
    <div className="App">
      <DragDropContext onDragEnd={this.onDragEnd}>
      <Droppable droppableId="droppable-1">
            {(provided, snapshot) => (
              <div 
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="vertical-container"
              >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
                {provided.placeholder}
              </div>
            )}  
        </Droppable>
      </DragDropContext>
    </div>
  );
}
}


