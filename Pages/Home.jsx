import { connect } from "react-redux";
import MyForm from "../Components/MyForm";
import Result from "../Components/Result";
import { reset } from "redux-form";

function Home({isEditingMode, editId, add, resetForm, saveUser, changeToAddMode}) {
  const handleSubmission = (values) => {
    console.log("Form values:", values);
    if(isEditingMode) {
      saveUser(editId, values)
      changeToAddMode();
    } else {
      add(values);
    }
    resetForm();
  };

  return (
    <>
      <MyForm onSubmit={handleSubmission}/>
      <Result />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isEditingMode: state.edit.isEditingMode,
    editId: state.edit.editId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (input) => dispatch({type: 'add_new_user', payload: input}),
    resetForm: () => dispatch(reset('myForm')),
    saveUser: (id, input) => dispatch({type: 'edit_user', payload: [id, input]}),
    changeToAddMode: () => dispatch({type:'change_to_add_mode'})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
