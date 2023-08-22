const context = React.useContext(UserContext);
const [email, setEmail] = React.useState('test');

React.useEffect(() => {
  if (context.currentUser !== null) {
    fetch(`/find/user/${context.currentUser}`)
      .then(response => response.json())
      .then(user => {
        setEmail(user.email);
      });
  }
}, []);

function Name(){
    return (
        <p>
            {email}
        </p>
    )
}