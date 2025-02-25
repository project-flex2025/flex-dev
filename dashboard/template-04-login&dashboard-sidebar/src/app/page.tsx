
import SalesChart from "./components/SalesChart";
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
                    <p className="card-category">Total users</p>
                    <h4 className="card-title">40,689</h4>
                  </div>
                </div>
                <div className="col-icon">
                  <div className="icon-big text-center icon-blue bubble-shadow-small">
                    <i className="fa-solid fa-user-group"></i>
                  </div>
                </div>
              </div>
              <div className="sale-info">
                <i className="fa-solid fa-arrow-trend-up text-info"></i> <span className="text-info ms-1">8.5 %</span><span className="ms-1">Up from yesterday</span>
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
                    <p className="card-category">Total Users</p>
                    <h4 className="card-title">12,345</h4>
                  </div>
                </div>
                <div className="col-icon">
                  <div className="icon-big text-center icon-yellow bubble-shadow-small">
                    <i className="fa-solid fa-cube"></i>
                  </div>
                </div>

              </div>
              <div className="sale-info">
                <i className="fa-solid fa-arrow-trend-up text-info"></i> <span className="text-info ms-1">1.2 %</span><span className="ms-1">Up from yesterday</span>
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
                    <p className="card-category">Total Sales </p>
                    <h4 className="card-title">$69,974</h4>
                  </div>
                </div>
                <div className="col-icon">
                  <div className="icon-big text-center icon-info bubble-shadow-small">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                </div>
              </div>
              <div className="sale-info">
                <i className="fa-solid fa-arrow-trend-down text-danger"></i> <span className="text-danger ms-1">2.5 %</span><span className="ms-1">Up from yesterday</span>
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
                    <p className="card-category">Total Pending</p>
                    <h4 className="card-title">1268</h4>
                  </div>
                </div>
                <div className="col-icon">
                  <div className="icon-big text-center icon-warning bubble-shadow-small">
                    <i className="fa-solid fa-clock-rotate-left"></i>
                  </div>
                </div>

              </div>
              <div className="sale-info">
                <i className="fa-solid fa-arrow-trend-up text-info"></i> <span className="text-info ms-1">1.2 %</span><span className="ms-1">Up from yesterday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <SalesChart />
      </div>
      <TableComponent />
    </>
  );
}
