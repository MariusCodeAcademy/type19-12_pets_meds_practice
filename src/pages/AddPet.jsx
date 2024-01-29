import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import SmartInput from '../components/UI/SmartInput';

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
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log('formik.values ===', formik.values);
  return (
    <div className='container'>
      <h1>AddPet</h1>
      <Link to='/'>Go back</Link>
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <SmartInput label='Name' name='name' formik={formik} />
        <SmartInput type='date' label='Date of birth' name='dob' formik={formik} />
        <SmartInput label='Client email' type='email' name='client_email' formik={formik} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
