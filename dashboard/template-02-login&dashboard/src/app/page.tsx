
import TableComponent from "./components/TableComponent";

export default function Home() {
  return (
    <>
      <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
        <div>
          <h3 className="fw-bold mb-3 dashboard-head">Good Morning, Krishty </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-round">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col col-stats ms-3 ms-sm-0">
                  <div className="numbers">
                    <p className="card-category">Total Employees</p>
                    <h4 className="card-title">123</h4>
                  </div>
                </div>
                <div className="col-icon">
                  <div className="icon-big text-center icon-primary bubble-shadow-small">
                    <i className="fa-solid fa-user-group"></i>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-round">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col col-stats ms-3 ms-sm-0">
                  <div className="numbers">
                    <p className="card-category">On Time</p>
                    <h4 className="card-title">100</h4>
                  </div>
                </div>
                <div className="col-icon">
                  <div className="icon-big text-center icon-primary bubble-shadow-small">
                    <i className="fa-solid fa-stopwatch"></i>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-round">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col col-stats ms-3 ms-sm-0">
                  <div className="numbers">
                    <p className="card-category">Absent </p>
                    <h4 className="card-title">3</h4>
                  </div>
                </div>
                <div className="col-icon">
                  <div className="icon-big text-center icon-primary bubble-shadow-small">
                    <i className="fa-solid fa-user-xmark"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-round">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col col-stats ms-3 ms-sm-0">
                  <div className="numbers">
                    <p className="card-category">Late Arrival</p>
                    <h4 className="card-title">20</h4>
                  </div>
                </div>
                <div className="col-icon">
                  <div className="icon-big text-center icon-primary bubble-shadow-small">
                    <i className="fa-regular fa-hourglass"></i>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <TableComponent />
    </>
  );
}
