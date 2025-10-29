import { connect } from "react-redux";
import User from "./User";
import { useParams } from "react-router-dom";

function Result({ users, searchText, handleSearchText }) {
  const { name } = useParams();

  const normalizedSearch = (searchText || "").toString().trim().toLowerCase();
  const normalizedParam = (name || "").toString().trim().toLowerCase();

  // Helper to render a list of user components from an array of user objects
  const renderUsers = (arr) => {
    if (!arr || arr.length === 0) return null;
    return arr.map((user) => (
      <User key={user.id} id={user.id} name={user.name} email={user.email} />
    ));
  };

  // Apply both filters: route param filter first (if present), then searchText to refine results.
  let visibleUsers = users;
  if (normalizedParam) {
    visibleUsers = visibleUsers.filter((u) =>
      u.name.toString().toLowerCase().startsWith(normalizedParam)
    );
  }

  if (normalizedSearch) {
    visibleUsers = visibleUsers.filter((u) =>
      u.name.toString().toLowerCase().startsWith(normalizedSearch)
    );
  }

  return (
    <>
      <h3>Result</h3>
      {users.length > 0 && (
        <input
          type="text"
          placeholder="search name"
          value={searchText || ""}
          onChange={(e) => handleSearchText(e.target.value)}
        />
      )}

      {users.length === 0 && <p>No Record</p>}

      {users.length > 0 && visibleUsers.length === 0 && (
        <p>No matching records</p>
      )}

      {users.length > 0 && visibleUsers.length > 0 && (
        <div>{renderUsers(visibleUsers)}</div>
      )}
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
      dispatch({ type: "searching", payload: input }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
