import { Link } from "react-router-dom";
import AddVehicleForm from "../Forms/AddVehicleForm";
import { useState } from "react";

const Vehicles = (props) => {
  const { user } = props;
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = props.vehicles.filter((el) => {
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
              <h2>Add Vehicle</h2>
              <AddVehicleForm user={user} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="listRight">
        <button onClick={props.addClick}>Add Vehicle</button>
        <input
          onChange={inputHandler}
          type="search"
          value={inputText}
          placeholder="Search for vehicle"
        />
        <div className="uList">
          <h2>Vehicle List</h2>
          <ul>
            {filteredData.map((vehicle, i) => (
              <li key={i}>
                <div>
                  <Link
                    to={`${vehicle.name}`}
                    style={{ fontSize: "25px", padding: "15px" }}
                  >
                    {vehicle.name}
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

export default Vehicles;
