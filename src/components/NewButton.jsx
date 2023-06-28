const NewButton = (props) => {
  return (
    <button className="NewButton" onClick={props.handleClickNewButton}>
      +
    </button>
  );
};

export const calcNewId = (contents) => {
  const ids = contents.map((content) => {
    return parseInt(content["id"]);
  });

  return ids.length === 0 ? 0 : Math.max(...ids) + 1;
};

export default NewButton;
