//using props which have diconstructed to enhance reusability and dynamic, the second prop is defined with a default value

export default function Jumbo({title, subTitle="Welcome to E-Biashara Excel"}) {
  return (
    <>
      <div className="container-fluid  bg-primary">
        <div className="row">
          <div className="col text-center p-3.5 bg-light">
            <h1>{title}</h1>
            <p className="lead">{subTitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}
