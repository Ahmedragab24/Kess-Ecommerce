interface Iprops {
  status?: number;
  title?: string;
}

function ErrorHandeler({ status = 500, title = "Server Error" }: Iprops) {
  return (
    <div>
      <h2>
        {status}, {title}
      </h2>
    </div>
  );
}

export default ErrorHandeler;
