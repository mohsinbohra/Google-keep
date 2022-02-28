import React from 'react'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";

const Note = ({title, content, onDelete, id}) => {
  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>  
      <Button onClick={() => onDelete(id)}>
        <DeleteOutlineIcon />
      </Button>
    </div>
  )
}

export default Note