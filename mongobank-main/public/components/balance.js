function Balance() {
  const [balance, setBalance] = React.useState(null);
  const context = React.useContext(UserContext);
  const [name, setName] = React.useState('');

  // get user and set balance
  React.useEffect(() => {
    if (context.currentUser !== null) {
      fetch(`/find/user/${context.currentUser}`)
        .then(response => response.json())
        .then(user => {
          setBalance(user.balance);
          setName(user.email);
        });
    }
  }, []);

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      headerText="Balance"
      status=""
      name={name}
      body={
        context.currentUser !== null ?
        <div>
          {balance === null ? 'Loading' : `Your balance is $${balance}.`}
        </div>
        :
        <div>
          Please log in first.
        </div>
      }
    />
  );
}