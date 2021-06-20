import { useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from '@chakra-ui/react'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'

export const HookForm = () => {
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm({ defaultValues: { email: '' }, mode: 'onChange' })

  const [submittedData, setSubmittedData] = useState({})

  const [messageData, setMessageData] = useState({ message: '', status: '' })

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
      try {
        const result = await res.json()
        console.log('result: ', result)
        if (result.error) {
          setMessageData({
            message: 'You are already subscribed',
            status: 'error'
          })
        } else {
          setMessageData({
            message: 'Success, thanks for subscribing.',
            status: 'success'
          })
        }
        resolve({})
      } catch (e) {
        console.log('error: ', e)
        setMessageData({ message: e.result.error.message, status: 'error' })
      }
    })
  }

  return (
    <div className="mx-auto w-5/6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-lg mb-5 font-NotoSerif text-center">
          Enter your email to receive updates
        </p>
        <div className="flex md:flex-row mx-auto gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-5/6"
          >
            <FormControl>
              <Input
                id="email"
                placeholder="email"
                className="mx-2 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register('email', {
                  required: 'This is required',
                  minLength: { value: 4, message: 'Minimum length should be 4' }
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
              <p
                className={
                  messageData.status == 'success'
                    ? 'text-green-400'
                    : 'text-red-500'
                }
              >
                {messageData.message}
              </p>
            </FormControl>
          </motion.div>
          <Button
            disabled={!formState.isValid}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
            width="50px"
            height="50px"
            className="rounded-full bg-green-400 p-4 ml-5 -mt-1 hover:shadow-md hover:bg-green-500 w-90 text-white hidden md:block"
          >
            <FaPaperPlane className="text-white" />
          </Button>
        </div>
      </form>
    </div>
  )
}
