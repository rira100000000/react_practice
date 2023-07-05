import useContents from "../hooks/useContents";
import DeleteButton from "./DeleteButton";
import { useLogin } from "../hooks/useLogin";

const EditForm = (props) => {
  const handleChange = (event) => {
    event.preventDefault();
    props.setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleClickUpdateButton();
  };
  const { isLogin } = useLogin();

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <textarea type="text" value={props.text} onChange={handleChange} />
        {isLogin && (
          <div className="buttons">
            <input type="submit" value="編集" className="submit" />
            {
              <DeleteButton
                handleClickDeleteButton={props.handleClickDeleteButton}
                editingId={props.editingId}
              />
            }
          </div>
        )}
      </form>
    </div>
  );
};

export default EditForm;
