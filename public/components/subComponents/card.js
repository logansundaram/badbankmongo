function Card(props) {
  const background = props.bgcolor ? ` bg-${props.bgcolor}` : ' bg-primary';
  const text = props.txtcolor ? ` text-${props.txtcolor}` : ' text-white'
  const cardHeaderClass = `card-header${background}${text}`;

  return(
    <>
    <div className="card" style={{maxWidth: "18rem"}}>
      <h5 className={cardHeaderClass}>{props.headerText}
      <h5 className={cardHeaderClass}>
         {props.name}
      </h5>
      </h5>
      <div className="card-body">
        {props.body}
      </div>
    </div>
    </>
  );
}