function CreateAccount() {
  const [showForm, setShowForm] = React.useState(true);

  const formElements = ['name', 'email', 'password', 'button'];
  const bgcolor = 'primary';
  const txtcolor = 'black'
  const initialButtonMessage = 'Create Account'
  const successMessage = 'Acount Created. Would you like to create another?'
  const successButtonText = 'Create Another Account'

  return (
    <Card
      bgcolor={bgcolor}
      txtcolor={txtcolor}
      headerText="Create Account"
      name=""
      body={
        showForm ? 
        <Form 
          pageName="CreateAccount"
          setShowForm={setShowForm}
          formElements={formElements}
          bgcolor={bgcolor} 
          txtcolor={txtcolor}
          initialButtonMessage={initialButtonMessage}
        /> : 
        <FormMessage
          pageName="CreateAccount"
          setShowForm={setShowForm}
          bgcolor={bgcolor}
          txtcolor={txtcolor}
          successMessage={successMessage}
          successButtonText={successButtonText}
        />
      }
    />
  );
}
