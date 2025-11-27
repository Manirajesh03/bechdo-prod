const Button = ({ name, onClick, styles }) => {
  return (
    <button className="button" onClick={onClick} style={styles}>
      {name}
    </button>
  );
};

export default Button;
