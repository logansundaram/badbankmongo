function FormMessage(props) {
  const context = React.useContext(UserContext);

  const background = props.bgcolor ? ` btn-${props.bgcolor}` : ' btn-primary';
  const buttonClass = `btn${background}`;

  function handleSubmit() {
    switch (props.pageName) {
      case 'CreateAccount':
        props.setShowForm(true);
        break;
      case 'Deposit':
      case 'Withdraw':
        props.setShowForm({form: true, balance: null})
        break;
      case 'Login':
        console.log('test');
        context.setCurrentUser(null);
        break;
    }
  }

  return (
    <>
      <h5>{props.successMessage}</h5>
      <button 
        type="submit" 
        className={buttonClass} 
        onClick={handleSubmit}
      >{props.successButtonText}</button>
    </>
  )
}
