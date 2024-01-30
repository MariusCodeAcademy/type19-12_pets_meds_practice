import { useFormik } from 'formik';
import PageHeader from '../components/UI/PageHeader';
import SmartInput from '../components/UI/SmartInput';
import Button from '../components/UI/Button';
import useApiData from '../hooks/useApiData';

/*
POST sukuria 'prescriptions' įrašą.
JOI schema:
medication_id: Joi.number().required(),
pet_id: Joi.number().required(),
comment: Joi.string().trim().required(),
*/
const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/meds';
export default function PresriptionPage() {
  // paimti petId is params
  const [medsArr, setMedsArr] = useApiData(url);
  const notEmptyMeds = medsArr.filter((mObj) => mObj.name && mObj.description);
  console.log('medsArr ===', medsArr);
  const formik = useFormik({
    initialValues: {
      comment: '',
      medication: '',
    },
    onSubmit: (values) => {
      console.log('values ===', values);
      // pagaminti objekta su medication_id, pet_id, comment
      // issiusti ji su axios i back end
      // jei semkimgai sukurtas prescrip
      // naviguoti i single pet page to pet is kurio atejom
    },
  });

  return (
    <div className='container'>
      <PageHeader title={'Presriptions Page'} />

      <form onSubmit={formik.handleSubmit}>
        <label className='block mb-4'>
          <span className='text-lg block first-letter:uppercase'>Select medication</span>
          <select
            onChange={formik.handleChange}
            value={formik.values.medication}
            name='medication'
            className='border w-full px-3 py-[6px] rounded-md'>
            <option disabled defaultValue value=''>
              Select
            </option>
            {notEmptyMeds.map((mObj) => (
              <option key={mObj.id} value={mObj.id}>
                {mObj.name} - ({mObj.id})
              </option>
            ))}
          </select>
        </label>
        <SmartInput type='textarea' name={'comment'} formik={formik} />
        <Button type='submit'>Add Prescription</Button>
      </form>
    </div>
  );
}
