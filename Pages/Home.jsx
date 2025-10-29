import { connect } from "react-redux";
import MyForm from "../Components/MyForm";
import Result from "../Components/Result";
import { reset } from "redux-form";
import { addUser, changeToAddMode, saveUser } from "../Action/action";
import '../CSS/Home.css'

function Home({
  isEditingMode,
  editId,
  addUser,
  resetForm,
  saveUser,
  changeToAddMode,
  formState
}) {

  console.log(formState)

  const handleSubmission = (values) => {
    console.log("Form values:", values);
    if (isEditingMode) {
      saveUser(editId, values);
      changeToAddMode();
    } else {
      addUser(values);
    }
    resetForm();
  };

  return (
    <>
      <div className="container-md">
        <div className="row home-container">
          <div className="col">
            <MyForm onSubmit={handleSubmission} />
          </div>
          <div className="col"><Result /></div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isEditingMode: state.edit.isEditingMode,
    editId: state.edit.editId,
    formState: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (input) => dispatch(addUser(input)),
    resetForm: () => dispatch(reset("myForm")),
    saveUser: (id, input) =>
      dispatch(saveUser(id, input)),
    changeToAddMode: () => dispatch(changeToAddMode()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
