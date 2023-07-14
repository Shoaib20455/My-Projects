import React, { useState } from 'react';

const Todoitem = ({ todoItem_Prop, deleteMyItem, updateMyItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todoItem_Prop.title);
  const [updatedDescription, setUpdatedDescription] = useState(todoItem_Prop.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedTask = {
      ...todoItem_Prop,
      title: updatedTitle,
      description: updatedDescription
    };

    updateMyItem(updatedTask);

    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <div className="card">
          <div className="card-body">
            <input
              type="text"
              className="form-control mb-2"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
            <button className="btn btn-primary" style={{ marginRight: '0.5rem' }} onClick={handleSave}>Save</button>
            <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="card mb-3">
          <div className="card-body">
            <h4>{todoItem_Prop.title}</h4>
            <p>{todoItem_Prop.description}</p>
            <button className="btn btn-danger btn-sm" style={{ marginRight: '0.5rem' }} onClick={() => deleteMyItem(todoItem_Prop)}>Delete</button>
            <button className="btn btn-primary btn-sm" onClick={handleEdit}>Edit</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Todoitem;
