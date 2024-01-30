import { useParams } from 'react-router-dom';
import PageHeader from '../components/UI/PageHeader';
import useApiData from '../hooks/useApiData';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/logs';
const petsUrl = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets';

export default function SinglePetPage() {
  // gauti petId
  const { petId } = useParams();
  console.log('petId ===', petId);

  const [currentPetArr, setCurrentPetArr, isLoading, error, reFetch] = useApiData(
    `${url}/${petId}`,
  );
  console.log('currentPetArr ===', currentPetArr);
  // const currentPetObj = currentPetArr[0];

  const [allPetsArr] = useApiData(petsUrl);
  console.log('allPetsArr ===', allPetsArr);
  const currentPetObj = allPetsArr.find((pObj) => {
    // console.log('pObj.id ===', pObj.id);
    // console.log('petId ===', petId);
    return +pObj.id === +petId;
  });
  console.log('currentPetObj ===', currentPetObj);

  return (
    <div className='container'>
      <PageHeader title={`Pet name: ${currentPetObj?.name || ''}`}>
        <Button to='/logs/add'>Add Log</Button>
        <Button outline to='/presc/add'>
          Add prescription
        </Button>
      </PageHeader>

      <ul className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {currentPetArr.map((logObj) => (
          <Card key={logObj.status} li>
            <p className='border-b mb-3'>Log</p>
            <h3 className='text-2xl font-semibold mb-3'>{logObj.status}</h3>
            <p>{logObj.description}</p>
          </Card>
        ))}
      </ul>
    </div>
  );
}
