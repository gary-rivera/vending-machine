import Dog from "./Dog";

function DogList({dogs}) {
  return (
    <ul>
      {dogs.map(d => (
        <li>
          <p>{d.name}</p>
          <image src={d.src} alt=""/>
        </li>
      ))}
    </ul>
  );
}
export default DogList;