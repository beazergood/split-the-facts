import { useForm, useFieldArray, Controller } from 'react-hook-form'
import React, { useEffect } from 'react'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from '@chakra-ui/react'

export const HookForm = () => {
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm({ defaultValues: { email: '' } })

  const [submittedData, setSubmittedData] = React.useState({})

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '' })
    }
  }, [formState, submittedData, reset])

  function onSubmit(values) {
    return new Promise(async (resolve) => {
      console.log('values: ', values)

      const res = await fetch('/api/register', {
        body: JSON.stringify({
          email: values.email
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      const result = await res.json()

      resolve({})
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.email}>
        <p className="text-lg mb-5">Enter your email to receive updates</p>

        {/* <FormLabel htmlFor="email">Email</FormLabel> */}
        <Input
          id="email"
          placeholder="email"
          {...register('email', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' }
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  )
}
