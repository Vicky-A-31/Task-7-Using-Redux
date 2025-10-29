import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

function MyForm(props) {
  const { handleSubmit, isEditingMode, saveBtn, addBtn, editTitle, addTitle } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>{!isEditingMode ? addTitle : editTitle}</h2>

        <div>
          <label htmlFor="name">Name</label>
          <Field
            name="name"
            type="text"
            component="input"
            placeholder="enter name"
            id="name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="email"
            component="input"
            placeholder="enter email"
            id="email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            autoComplete="on"
            component="input"
            placeholder="enter password"
            id="password"
            required
          />
        </div>

  <button type="submit">{!isEditingMode ? addBtn : saveBtn}</button>
      </form>
    </>
  );
}


const mapStateToProps = (state) => {
  // Provide initialValues for redux-form when in edit mode.
  // This avoids imperative dispatches to populate the form fields from other components
  // and leverages redux-form's enableReinitialize to update the form when initialValues change.
  const editId = state.edit.editId;
  const userToEdit = editId != null ? state.users.find((u) => u.id === editId) : undefined;

  return {
    isEditingMode: state.edit.isEditingMode,
    saveBtn: state.edit.saveBtn,
    addBtn: state.edit.addBtn,
    editTitle: state.edit.editTitle,
    addTitle: state.edit.addTitle,
    initialValues: userToEdit || {} // redux-form will use this to populate fields; default to {} when not editing
  };
}


const form = reduxForm({
  form: "myForm",
  enableReinitialize: true,
})(MyForm);

export default connect(mapStateToProps)(form)
