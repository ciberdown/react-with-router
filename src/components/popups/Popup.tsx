interface IProps {
  header: string;
  body: string;
  type?: "warning" | "error";
}

function Popup({ header, body, type = "warning" }: IProps) {
  function getClass(): string {
    return type == "warning"
      ? "position-fixed top-50 end-0 bg-warning"
      : "position-fixed top-0 end-0 bg-danger";
  }

  return (
    <div className={getClass()}>
      <h1>{header}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Popup;
