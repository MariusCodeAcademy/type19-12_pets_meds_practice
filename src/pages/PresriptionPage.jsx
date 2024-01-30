import { useFormik } from 'formik';
import PageHeader from '../components/UI/PageHeader';
import SmartInput from '../components/UI/SmartInput';
import Button from '../components/UI/Button';

/*
POST sukuria 'prescriptions' įrašą.
JOI schema:
medication_id: Joi.number().required(),
pet_id: Joi.number().required(),
comment: Joi.string().trim().required(),
*/

export default function PresriptionPage() {
  const formik = useFormik({
    initialValues: {
      comment: '',
      medication: '',
    },
  });

  return (
    <div className='container'>
      <PageHeader title={'Presriptions Page'} />

      <form>
        <label className='block mb-4'>
          <span className='text-lg block first-letter:uppercase'>Select medication</span>
          <select className='border w-full px-3 py-[6px] rounded-md'>
            <option value='1'>Sun</option>
            <option value='1'>Moon</option>
            <option value='1'>Water</option>
          </select>
        </label>
        <SmartInput type='textarea' name={'comment'} formik={formik} />
        <Button type='submit'>Add Prescription</Button>
      </form>
    </div>
  );
}
