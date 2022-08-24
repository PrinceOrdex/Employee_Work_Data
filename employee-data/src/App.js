import React from 'react'
import "./style.css"

function App() {
  return (
    <>
      <div className="container-fluid heading">
        <h3 className='py-4 text-center'>Employee Data</h3>
      </div>
      <div className='main'>


        <div className="container">
          <form action="">
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="text" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div class="form-group">
              <input type="date" className="form-control" id="date" aria-describedby="date" />
            </div>
            <h5>Enter Your Tasks</h5>

            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Sr. No</th>
                  <th scope="col">Task</th>
                  <th scope="col">Description</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
