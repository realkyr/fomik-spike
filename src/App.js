import { Button } from 'antd'
import Form from './components/Form'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import 'antd/dist/antd.css'
import './App.css'

function App() {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.array().of(
      Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    ),
  })

  const formik = useFormik({
    initialValues: {
      firstName: [],
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }, 1000)
    },
    validationSchema: SignupSchema,
  })

  // useEffect(() => {
  //   formik.validateForm()
  // }, [formik])

  const submit = () => {
    console.log(formik.values)
  }

  return (
    <div className='App'>
      <Form formik={formik} />
      <Button
        onClick={submit}
        disabled={!formik.isValid}
        type='primary'
        htmlType='submit'
      >
        Submit
      </Button>
    </div>
  )
}

export default App
