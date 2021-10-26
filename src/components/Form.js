import React from 'react'
import { Form, Input } from 'antd'

export default function CustomForm(props) {
  const { formik } = props

  return (
    <Form onFinish={formik.handleSubmit}>
      <Input
        id='firstName'
        name='firstName[0]'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.firstName && formik.values.firstName[0]}
      />
      {formik.errors.firstName && formik.errors.firstName[0] ? (
        <div>{formik.errors.firstName[0]}</div>
      ) : null}
    </Form>
  )
}
