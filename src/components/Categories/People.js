import { Link } from "react-router-dom";
import AddPersonForm from "../Forms/AddPersonForm";
import { useState } from "react";

const People = (props) => {
  const { user } = props;
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = props.people.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(inputText);
    }
  });

  return (
    <div className="container">
      <div className="listLeft">
        {props.addButtonClick ? (
          <div className="listRight">
            <button onClick={props.addClick}>Cancel</button>
            <div className="addForm">
              <h2>Add Person</h2>
              <AddPersonForm user={user} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="listRight">
        <button onClick={props.addClick}>Add New Person</button>
        <input
          onChange={inputHandler}
          type="search"
          value={inputText}
          placeholder="Search for person"
        />
        <div className="uList">
          <h2>People List</h2>
          <ul>
            {filteredData.map((person, i) => (
              <li key={i}>
                <div>
                  <Link
                    to={`${person.name}`}
                    style={{ fontSize: "25px", padding: "15px" }}
                  >
                    {person.name}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default People;
