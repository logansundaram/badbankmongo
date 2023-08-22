function Navbar() {
  return (
    //deleted bg-light from navbar to get rid of white space
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#/">Bank App</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <a title="create an account with badbank" className="nav-link" href="#/createAccount/">Create Account</a>
          </li>

          <li title="login to your account" className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>

          <li title="deposit money to your account" className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>

          <li title="withdraw money from your account" className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>

          <li title="view your balance" className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>

          <li title="view all data" className="nav-item">
            <a className="nav-link" href="#/allData/">All Data</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
