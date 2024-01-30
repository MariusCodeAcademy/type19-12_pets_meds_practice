import { useParams } from 'react-router-dom';
import PageHeader from '../components/UI/PageHeader';
import useApiData from '../hooks/useApiData';
import Card from '../components/UI/Card';

const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/logs';

export default function SinglePetPage() {
  // gauti petId
  const { petId } = useParams();
  console.log('petId ===', petId);

  const [currentPetArr, setCurrentPetArr, isLoading, error, reFetch] = useApiData(
    `${url}/${petId}`,
  );
  console.log('currentPetArr ===', currentPetArr);
  const currentPetObj = currentPetArr[0];

  return (
    <div className='container'>
      <PageHeader title={`Pet name: ${currentPetObj?.name}`} to='/' linkText='Go back' />

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
