import React from "react";

const ShowButton = (props) => {
  const handleClick = () => {
    props.setShowEditForm(true);
    props.setEditingId(props.id);
    props.setContent(props.contents[props.id]);
  };

  return (
    <div>
      <button
        id={"show_" + props.id}
        className={"ShowButton"}
        onClick={handleClick}
        style={
          props.editingId.toString() === props.id
            ? { color: "black", textDecoration: "none" }
            : { color: "blue" }
        }
      >
        {props.contents[props.id].split("\n")[0]}
      </button>
    </div>
  );
};

export default ShowButton;
