import Todos from "./components/Todo/Todos";
import React from "react";
function App() {
  const initialFields = {
    field1: "",
    field2: "",
  };
  const [InputFields, setInputFields] = React.useState([initialFields]);
  const handleChangeInputField = (key, row, val) => {
    const newInputField = InputFields.map((elem, idx) => {
      if (idx === row) {
        const el = { ...elem, [key]: val };
        return el;
      }
      return elem;
    });
    setInputFields(newInputField);
  };

  const handleAddNewRow = () => {
    setInputFields([...InputFields, initialFields]);
  };

  const handleDeleteRow = (row) => {
    const newRows = InputFields.filter((_, i) => i !== row);
    if (newRows.length <= 0) {
      setInputFields([initialFields]);
    } else {
      setInputFields(newRows);
    }
  };
  return (
    <div>
      {/* <Todos /> */}
      <div>
        {/* Drop Down */}
        {/* Will have select box, Once we selected two input box should come */}
        {/* Adding two buttons, for add  and delete*/}
        {/* Once we submit it should console input data */}

        <div>
          <select>
            <option value="Apple">Apple</option>
            <option value="Mi">Apple</option>
            <option value="Vivo">Vivo</option>
          </select>
          <div>
            <br />
            {InputFields.map((inputs, i) => (
              <div>
                <input
                  onChange={(event) => {
                    const val = event.target.value;
                    handleChangeInputField("field1", i, val);
                  }}
                />
                <br />

                <br />
                <input
                  onChange={(event) => {
                    const val = event.target.value;
                    handleChangeInputField("field2", i, val);
                  }}
                />
                <br />
                <br />
                <div>
                  <button onClick={handleAddNewRow}>Add</button>
                  <button onClick={() => handleDeleteRow(i)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button onClick={() => console.log(InputFields)}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
