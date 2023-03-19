export default function listComponent(props) {

  return (
    <ul>
      {props.liArr.map((elem, i) => {return <li key={i}>{elem}</li>})}
    </ul>
  );
}