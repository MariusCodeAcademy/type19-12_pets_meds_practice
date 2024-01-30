import PageHeader from '../components/UI/PageHeader';
import Button from '../components/UI/Button';
import useApiData from '../hooks/useApiData';
import Card from '../components/UI/Card';

const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/meds';

export default function MedicationsPage() {
  // GET  https://glittery-dull-snickerdoodle.glitch.me/v1/meds
  // parsiusti ir atvaizduoti medications

  const [medsArr, setMedsArr] = useApiData(url);

  console.log('medsArr ===', medsArr);

  return (
    <div className='container'>
      <PageHeader title={'Medications'}>
        <Button to='/meds/add'>Add Medication</Button>
      </PageHeader>
      <ul className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {medsArr
          .filter((mObj) => mObj.name && mObj.description)
          .map((medObj) => (
            <Card className='bg-yellow-100/50' key={medObj.id} li>
              <p className='border-b mb-3'>Medication</p>
              <h3 className='text-2xl font-semibold mb-3'>{medObj.name}</h3>
              <p>{medObj.description}</p>
            </Card>
          ))}
      </ul>
    </div>
  );
}
