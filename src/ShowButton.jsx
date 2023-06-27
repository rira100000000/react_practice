const ShowButton = (props) => {
  const handleClick = () => {
    props.handleClickShowButton(props.id);
  };
  return (
    <div>
      <button
        id={`show_${props.id}`}
        className={"ShowButton"}
        onClick={handleClick}
        style={
          props.editingId === props.id
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
