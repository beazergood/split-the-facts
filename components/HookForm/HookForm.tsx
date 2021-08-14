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
import Confetti from 'react-dom-confetti'

export interface HookFormProps {
  fill?: string
}

export const HookForm = ({ fill = '#000' }) => {
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm({ defaultValues: { email: '' }, mode: 'onChange' })

  const [submittedData, setSubmittedData] = useState({})
  const [someProp, setsomeProp] = useState(false)

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
        if (result.error) {
          setMessageData({
            message: 'You are already subscribed',
            status: 'error'
          })
        } else {
          setsomeProp(true)
          setMessageData({
            message: '👍 that worked, thanks for subscribing.',
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

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 4000,
    stagger: 9,
    width: '10px',
    height: '10px',
    perspective: '654px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} id="sign_up_form">
        <p
          className="text-lg mb-5 font-PlayfairDisplay text-center"
          onClick={() => {
            setsomeProp(!someProp)
          }}
        >
          Enter your email to subscribe to the occasional update from me.
        </p>
        <div className="flex flex-col md:flex-row mx-auto gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full md:w-1/2 mx-auto flex flex-col md:flex-row items-center justify-around "
          >
            <FormControl>
              <Input
                id="email"
                placeholder="Join the conversation"
                className="mx-auto appearance-none rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                {messageData.message}
              </p>
            </FormControl>
            <Button
              disabled={!formState.isValid}
              isLoading={isSubmitting}
              type="submit"
              style={{ backgroundColor: fill }}
              width="50px"
              height="50px"
              className="hover:shadow-xl text-white w-32 h-10 block rounded-full my-6"
            >
              <FaPaperPlane className="text-white" />
              <Confetti active={someProp} config={config} />
            </Button>
          </motion.div>
        </div>
      </form>
    </div>
  )
}
