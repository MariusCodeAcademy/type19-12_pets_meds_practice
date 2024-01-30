// sukurti forma supildyti naujam logui konkreciam petui

// supildzius loga gryztam i konkretau pet page

import PageHeader from '../components/UI/PageHeader';
import Button from '../components/UI/Button';
import { useFormik } from 'formik';
import SmartInput from '../components/UI/SmartInput';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
/*

LOG JOI schema:
pet_id: Joi.number().required(),
description: Joi.string().trim().required(),
status: Joi.string().trim().required(),
*/

const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/logs';

export default function AddLogPage() {
  const navigate = useNavigate();
  const { petId } = useParams();
  const formik = useFormik({
    initialValues: {
      description: '',
      status: '',
    },
    validationSchema: Yup.object({
      status: Yup.string().min(3).max(15).required(),
      description: Yup.string().min(3).required(),
    }),
    onSubmit: (values) => {
      console.log(values);
      const objToSend = {
        pet_id: petId,
        ...values,
      };
      console.log('objToSend ===', objToSend);
      sendLogAxios(objToSend);
    },
  });

  function sendLogAxios(data) {
    axios
      .post(url, data)
      .then((res) => {
        console.log('res.data ===', res.data);
        if (res.data.lastID) {
          // navigate
          navigate(`/pets/${petId}`);
        }
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  return (
    <div className='container'>
      <PageHeader title='Add Log'>
        <Button to={`/pets/${petId}`}>Go back</Button>
      </PageHeader>
      <form onSubmit={formik.handleSubmit}>
        <SmartInput label='Status' name='status' formik={formik} />
        <SmartInput type='textarea' label='Description' name='description' formik={formik} />
        <Button type='submit'>Add</Button>
      </form>
    </div>
  );
}
