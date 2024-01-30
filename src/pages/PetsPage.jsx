import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import useApiData from './../hooks/useApiData';
import Card from '../components/UI/Card';
import SinglePetCard from '../components/pets/SinglePetCard';
import PageHeader from '../components/UI/PageHeader';
import axios from 'axios';

const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets';

export default function PetsPage() {
  const [petsArr, setPetsArr, isLoading, error, reFetch] = useApiData(url);

  function handleDelete(idTodelete) {
    console.log('handleDelete ===', idTodelete);
    // kai gaunam sekminga istrynimo atsakyma is back end

    axios
      .delete(`${url}/${idTodelete}`)
      .then((resp) => {
        console.log('resp ===', resp);
        console.log('resp.data ===', resp.data);
        // atnaujinti sarasa
        // setPetsArr(petsArr.filter((pObj) => pObj.id !== idTodelete));
        // parisiusti is naujo
        reFetch();
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
    // atnaujinam petsArr kad nebebutu to el kuri istrynem
  }

  console.log('petsArr ===', petsArr);

  return (
    <div className='container'>
      <PageHeader title='Pets List' to='/pets/add' linkText='Add pet' />

      {isLoading && <p className='text-4xl px-4 py-3 border rounded-md text-center'>Loading... </p>}
      <ul className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {petsArr.map((pObj) => (
          <SinglePetCard onDelete={() => handleDelete(pObj.id)} key={pObj.id} item={pObj} />
        ))}
      </ul>
    </div>
  );
}
