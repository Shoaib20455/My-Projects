// Todos.js
import React from 'react';
import Todoitem from './Todoitem';

const Todos = ({ TodosProp, deleteProp, updateProp }) => {
  let myStyle = {
    minHeight: '50.1vh',
    margin: '40px auto'
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className='my-4'>My Tasks</h3>
      {TodosProp.length === 0 ? (
        "You have No Remaining Tasks at this time!"
      ) : (
        TodosProp.map((todoItem_Prop) => {
          return (<Todoitem key={todoItem_Prop.serial} todoItem_Prop={todoItem_Prop} deleteMyItem={deleteProp} updateMyItem={updateProp} />);
        })
      )}
    </div>
  );
};
export default Todos;
