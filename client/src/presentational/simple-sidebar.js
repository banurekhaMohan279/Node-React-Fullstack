/*eslint-disable */

function SimpleSidebar() {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 bg-light" style={{maxWidth: 4.5+'rem'}}>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <a href="http://www.google.com" className="nav-link active py-3 border-bottom" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
            </a>
          </li>
        </ul>
        <div className="dropdown border-top">
          <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser">
            <li><a className="dropdown-item" href="http://www.google.com">New project...</a></li>
            <li><a className="dropdown-item" href="http://www.google.com">Sign out</a></li>
          </ul>
        </div>
    </div>
  );
}

export default SimpleSidebar;
