import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import SmartInput from '../components/UI/SmartInput';
import * as Yup from 'yup';
import Button from './../components/UI/Button';

const samplePet = {
  name: 'Lese',
  dob: 1698883200000,
  client_email: 'lese@gmail.com',
};

export default function AddPet() {
  const formik = useFormik({
    initialValues: {
      name: '',
      dob: '',
      client_email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3).max(15).required(),
      dob: Yup.date().min('2000-01-01').required(),
      client_email: Yup.string().lowercase().email().required(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // sukurti fn sendPetAxios(data)
  // jei sekmingai sukurem naviguojam i /

  console.log('formik.values ===', formik.values);
  return (
    <div className='container'>
      <div className='my-5 flex items-center justify-between'>
        <h1 className='text-4xl'>Add Pet</h1>
        <Link to='/'>
          <Button>Go back</Button>
        </Link>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <SmartInput label='Name' name='name' formik={formik} />
        <SmartInput type='date' label='Date of birth' name='dob' formik={formik} />
        <SmartInput label='Client email' type='email' name='client_email' formik={formik} />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}
