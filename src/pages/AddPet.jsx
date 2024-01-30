import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import SmartInput from '../components/UI/SmartInput';
import * as Yup from 'yup';
import Button from './../components/UI/Button';
import PageHeader from '../components/UI/PageHeader';
import axios from 'axios';

const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets';

// some comment

const samplePet = {
  name: 'Lese',
  dob: 1698883200000,
  client_email: 'lese@gmail.com',
};

export default function AddPet() {
  const navigate = useNavigate();

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
      sendPetAxios(values);
    },
  });

  // sukurti fn sendPetAxios(data)
  // jei sekmingai sukurem naviguojam i /
  function sendPetAxios(data) {
    axios
      .post(url, data)
      .then((res) => {
        console.log('res.data ===', res.data);
        if (res.data.lastID) {
          // navigate
          navigate('/');
        }
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  console.log('formik.values ===', formik.values);
  return (
    <div className='container'>
      <PageHeader title='Add Pet'>
        <Button to='/'>Go back</Button>
      </PageHeader>

      <form onSubmit={formik.handleSubmit}>
        <SmartInput label='Name' name='name' formik={formik} />
        <SmartInput type='date' label='Date of birth' name='dob' formik={formik} />
        <SmartInput label='Client email' type='email' name='client_email' formik={formik} />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}
