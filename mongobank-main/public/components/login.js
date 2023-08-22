function Login(props) {
  const context = React.useContext(UserContext);
  
  const formElements = ['email', 'password', 'button'];
  const bgcolor = 'danger';
  const txtcolor = 'black'
  const initialButtonMessage = 'Login'
  const successMessage = 'You have successfully logged in.'
  const successButtonText = 'Logout'

  return (
    <Card
      bgcolor={bgcolor}
      txtcolor={txtcolor}
      headerText="Login"
      body={
        context.currentUser === null ? 
        <Form 
          pageName="Login"
          formElements={formElements}
          bgcolor={bgcolor} 
          txtcolor={txtcolor}
          initialButtonMessage={initialButtonMessage}
        /> : 
        <FormMessage
          pageName="Login"
          bgcolor={bgcolor}
          txtcolor={txtcolor}
          successMessage={successMessage}
          successButtonText={successButtonText}
        />
      }
    />
  );

}