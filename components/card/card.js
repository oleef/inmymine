const Card = ({
  className = "col-12",
  withHeader = false,
  title = "",
  children
}) => {
  return (
    <div className={className}>
      <div className="card">
        {withHeader ? (
          <div className="card-header">
            <h5 className="card-title m-0">{title}</h5>
          </div>
        ) : null}
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
