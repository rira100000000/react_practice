const ShowButton = (props) => {
  const handleClick = () => {
    props.handleClickShowButton(props.content);
  };
  return (
    <div>
      <button
        id={`show_${props.content["id"]}`}
        className={"ShowButton"}
        onClick={handleClick}
        style={
          props.editingId === props.content["id"]
            ? { color: "black", textDecoration: "none" }
            : { color: "blue" }
        }
      >
        {props.content["text"].split("\n")[0]}
      </button>
    </div>
  );
};

export default ShowButton;
