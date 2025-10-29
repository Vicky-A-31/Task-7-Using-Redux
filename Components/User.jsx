import { connect } from "react-redux"
import { deleteUser, changeToEditMode } from '../Action/action'
import { FaTrash, FaEdit } from 'react-icons/fa';


function User({id, name, email, deleteUser, changeToEditMode, users}) {

  return (
    <>
    <div className="record row">
      <div className="col">
        <p>{name}</p>
      <p>{email}</p>
      </div>
      <div className="col-2 d-flex flex-column justify-content-evenly">
        <FaEdit id="editIcon" role="button" onClick={() => changeToEditMode(id)} />
      <FaTrash id="deleteIcon" role="button" onClick={() => deleteUser(id)} />
      </div>
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (id) => dispatch(deleteUser(id)), 
        changeToEditMode: (id) => dispatch(changeToEditMode(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)