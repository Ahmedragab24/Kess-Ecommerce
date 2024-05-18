interface Iprops {
  status?: number;
  title?: string;
  message?: string; // Optional message prop for additional error information
}

function ErrorHandeler({
  status = 500,
  title = "Server Error",
  message = "An unexpected error occurred. Please try again later.",
}: Iprops) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{status}</h1>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default ErrorHandeler;
