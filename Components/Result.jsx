import { connect } from "react-redux";
import User from "./User";
import { useParams } from "react-router-dom";
import { searching } from "../Action/action";
import '../CSS/Result.css'


function Result({ users, searchText, handleSearchText }) {
  const { name } = useParams();

  let filteredlist = users;

  if(name) {
    filteredlist = filteredlist.filter(user => user.name.trim().toLowerCase().startsWith(name.trim().toLowerCase()))
  }


  if(searchText) {
    filteredlist = filteredlist.filter(user => user.name.trim().toLowerCase().startsWith(searchText.trim().toLowerCase()))
  }


  const renderUsers = arr => arr.length === 0 ? null : arr.map(user => <User key={user.id} id={user.id} name={user.name} email={user.email} />)
  
  

  return (
    <>
      <div className="result-container">
        <h3>Result</h3>
      {users.length > 0 && (
        <input
          type="text"
          placeholder="search name" value={searchText}
          onChange={(e) => handleSearchText(e.target.value)}
        />
      )}

      {!searchText && filteredlist.length == 0 && <p>No Record &#x1F937;</p>}

      {searchText && filteredlist.length === 0 && <p>No matching records &#x1F937;</p>}
      
      {filteredlist.length > 0 && <div className="records-container">{renderUsers(filteredlist)}</div>}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    searchText: state.edit.searchText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchText: (input) =>
      dispatch(searching(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
