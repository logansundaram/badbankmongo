const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;

const UserContext = React.createContext(null);

function Spa() {
  const [currentUser, setCurrentUser] = React.useState(null);
  console.log('Current User: ' + currentUser)

  return (
    <HashRouter>
      <div>
        <Navbar/>
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/createAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/allData/" component={AllData} />
        </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<Spa/>, document.getElementById('root'));
