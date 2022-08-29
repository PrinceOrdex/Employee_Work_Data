import React, { useState } from "react";
import "./style.css";

function App() {
  const [error, setError] = useState(null);

  const [data, setData] = useState({
    sr: null,
    email: "",
    date: "",
    task: "",
    description: "",
    stat: "",
  });

  function isValidEmail(email) {
    // return /\S+@\S+\.\S+/.test(email);
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  let name, value;
  const getInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name == "sr") {
      value = Math.max(1, Math.min(50, Number(value)));
    }

    if (name === "email") {
      if (!isValidEmail(value)) {
        setError("Email is invalid");
        setData({ ...data, [name]: value });
      } else {
        setError(null);
        setData({ ...data, [name]: value });
      }
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const getData = (e) => {
    const d = new Date(data.date).toLocaleDateString();

    if (data === "") {
    } else {
      // e.preventDefault();
      console.log(
        "Number : " +
          data.sr +
          "\n" +
          "Email : " +
          data.email +
          "\n" +
          "Date : " +
          d +
          "\n" +
          "Task : " +
          data.task +
          "\n" +
          "Description : " +
          data.description +
          "\n" +
          "State : " +
          data.stat
      );
    }

    console.log(data);
    const jsonData = JSON.stringify(data);

    console.log(jsonData);
  };

  return (
    <>
      <div className="container-fluid heading">
        <h3 className="py-4 text-center mb-0">Employee Task Data</h3>
      </div>
      <div className="main">
        <div className="container vh-100">
          <form action="" className="pt-4">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="text"
                className="form-control w-50"
                id="email"
                aria-describedby="emailHelp"
                onChange={getInput}
                name="email"
                value={data.email}
                required
              />
              {error && <h5 style={{ color: "red" }}>{error}</h5>}
            </div>
            <div class="form-group">
              <label for="date">Date</label>
              <input
                type="date"
                className="form-control w-50"
                id="date"
                aria-describedby="date"
                onChange={getInput}
                name="date"
                value={data.date}
                required
              />
            </div>
            <h5 className="text-center mt-5">Enter Your Tasks</h5>

            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col" className="border-right">
                    Sr. No
                  </th>
                  <th scope="col" className="border-right">
                    Task
                  </th>
                  <th scope="col" className="border-right">
                    Description
                  </th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="px-0 pr-1">
                    <input
                      type="number"
                      className="w-100 py-2 px-0 border-0 border-right"
                      onChange={getInput}
                      name="sr"
                      value={data.sr}
                      required
                    />
                  </th>

                  <td className="px-0 pr-1">
                    <textarea
                      id=""
                      rows="1"
                      className="w-100 py-2 border-0 required"
                      style={{ resize: "none" }}
                      onChange={getInput}
                      name="task"
                      value={data.task}
                      required
                    ></textarea>
                  </td>

                  <td className="px-0 pr-1">
                    <textarea
                      id=""
                      rows="1"
                      className="w-100 py-2 border-0 required"
                      style={{ resize: "none" }}
                      onChange={getInput}
                      name="description"
                      value={data.description}
                      required
                    ></textarea>
                  </td>
                  <td className="px-0">
                    <select
                      name="stat"
                      id=""
                      value={data.stat}
                      required
                      className="w-100 py-2 border-0"
                      onChange={getInput}
                    >
                      <option value="" disabled>
                        Select Status
                      </option>
                      <option value="Working">Working</option>
                      <option value="Done">Done</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>

            <button type="submit" class="btn btn-secondary" onClick={getData}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
