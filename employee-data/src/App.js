import React, { useState } from "react";
import "./style.css";
import { empdata } from "./empData";

function App() {
  const [data, setData] = useState({
    sr: null,
    email: "",
    date: "",
    task: "",
    description: "",
    stat: "",
  });

  let name, value;
  const getInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const getData = (e) => {
    const d = new Date(data.date).toLocaleDateString();

    if (data == "") {
    } else {
      // e.preventDefault();
      alert(
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

    const jsonData = JSON.stringify(data);
    console.log(jsonData);

    // })
  };

  // var file = data;
  // var obj = data;
  // sendDataSomewhere = function empdata(file) {
  //   empdata.writeFile(file, obj, function (err) {
  //     console.error(err);
  //   });
  // };
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
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                required
                onChange={getInput}
                name="email"
                value={data.email}
              />
            </div>
            <div class="form-group">
              <label for="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                aria-describedby="date"
                required
                onChange={getInput}
                name="date"
                value={data.date}
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
                      required
                      onChange={getInput}
                      name="sr"
                      value={data.sr}
                    />
                  </th>
                  {/* <td className='px-0 pr-1'><input type="text" className='w-100 py-2 px-0 border-0' /></td> */}
                  <td className="px-0 pr-1">
                    <textarea
                      id=""
                      rows="1"
                      className="w-100 py-2 border-0 required"
                      style={{ resize: "none" }}
                      onChange={getInput}
                      name="task"
                      value={data.task}
                    ></textarea>
                  </td>
                  {/* <td className='px-0 pr-1'><input type="text" className='w-100 py-2 border-0' /></td> */}
                  <td className="px-0 pr-1">
                    <textarea
                      id=""
                      rows="1"
                      className="w-100 py-2 border-0 required"
                      style={{ resize: "none" }}
                      onChange={getInput}
                      name="description"
                      value={data.description}
                    ></textarea>
                  </td>
                  <td className="px-0">
                    <input
                      type="text"
                      className="w-100 py-2 border-0"
                      onChange={getInput}
                      name="stat"
                      value={data.stat}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <button type="submit">Submit</button> */}
            <button type="submit" class="btn btn-secondary" onClick={getData}>
              Submit
            </button>
          </form>
          {/* <div>
            {empdata.map((val) => {
              return (
                <>
                  <p>{val.index}</p>
                  <p>{val.sr}</p>
                  <p>{val.email}</p>
                  <p>{val.date}</p>
                  <p>{val.task}</p>
                  <p>{val.description}</p>
                  <p>{val.stat}</p>
                </>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
