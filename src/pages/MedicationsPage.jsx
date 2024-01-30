import PageHeader from '../components/UI/PageHeader';
import Button from '../components/UI/Button';

export default function MedicationsPage() {
  // GET  https://glittery-dull-snickerdoodle.glitch.me/v1/meds
  // parsiusti ir atvaizduoti medications
  return (
    <div className='container'>
      <PageHeader title={'Medications'}>
        <Button to='/meds/add'>Add Medication</Button>
      </PageHeader>
    </div>
  );
}
