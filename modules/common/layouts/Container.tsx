const Container: React.FC<{
  head?: React.FC;
  children: React.ReactNode;
}> = (props) => {
  return (
    <main>
      <>{props.head && <props.head />}</>
      {props.children}
    </main>
  );
};

export default Container;
