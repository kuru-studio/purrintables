const Visibility = ({ state, children }: any) => {
  return (
    <>
      {state ? children : null}
    </>
  );
}

export default Visibility;
