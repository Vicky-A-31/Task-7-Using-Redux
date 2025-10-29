import { connect } from "react-redux";

function User({ id, name, email, deleteUser, changeToEditMode, users }) {
  function handleEdit(id) {
    // Only set edit mode with the id. The form will receive `initialValues`
    // via `mapStateToProps` in MyForm and reinitialize (enableReinitialize: true).
    changeToEditMode(id);
  }

  return (
    <>
      <li>
        {`${name} --- ${email} --- `}
        <button onClick={() => handleEdit(id)}>edit</button>
        {` --- `}
        <button onClick={() => deleteUser(id)}>delete</button>
      </li>
    </>
  );
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id) => dispatch({ type: "delete_user", payload: id }),
    // Only set the edit id; MyForm will pick up the user data from store
    changeToEditMode: (id) =>
      dispatch({ type: "change_to_edit_mode", payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
