import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function Dog({ dogs }) {
  let { name } = useParams();
  const history = useHistory();
  const [dog, setDog] = useState({});

  console.log(dogs, dog, name)
  console.log(dogs[name])

  useEffect(() => {
    setDog(d => dogs.filter(d => d.name.toLowerCase() === name)[0]);
  }, [name]);

  if(!dog) history.push('/dogs')
  
  return (
    <div>
      {dog.facts && <div>
        <h2>{dog.name}</h2>
        <img src={dog.src} alt={dog.name}/>
        <h2>{dog.age}</h2>
        <ul>
          {dog.facts.map(f => (
            <li>{f}</li>
          ))}
        </ul>
      </div>}
    </div>
    
  );
}
export default Dog;