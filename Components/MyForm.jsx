import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import '../CSS/Form.css'
import Input from "./Input";


function MyForm(props) {
  const { handleSubmit, pristine, invalid, isEditingMode, saveBtn, addBtn, editTitle, addTitle } = props;

  console.log("initial values: ", props.initialValues)
  console.log(props)


  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit} noValidate>
        <h3>{!isEditingMode ? addTitle : editTitle}</h3>

        <div>
          <label htmlFor="name">Name</label>
          <Field
            name="name"
            type="text"
            component={Input}
            placeholder="enter name"
            id="name"
            label='Name'
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
          />
        </div>

        <button type="submit" disabled={pristine || invalid} >{!isEditingMode ? addBtn : saveBtn}</button>
      </form>
      </div>
    </>
  );
}


const mapStateToProps = (state) => {
  const editId = state.edit.editId;
  const userToEdit = editId != null ? state.users.find(user => user.id === editId) : undefined;

  return {
    isEditingMode: state.edit.isEditingMode,
    saveBtn: state.edit.saveBtn,
    addBtn: state.edit.addBtn,
    editTitle: state.edit.editTitle,
    addTitle: state.edit.addTitle,
    initialValues: userToEdit || {}
  }
}


function validate(values) {
  console.log("values ",values)
  let errors = {}
  if(!values.name) {
    errors.name = 'name is required'
  }
  else if(!values.email) {
    errors.email = 'email is required'
  }
  else if(!values.password) {
    errors.password = 'password is required'
  }

  return errors
}

const form = reduxForm({
  form: "myForm",
  enableReinitialize: true,
  validate, // i wrote this function, i mean custom function 
})(MyForm);

export default connect(mapStateToProps)(form)
