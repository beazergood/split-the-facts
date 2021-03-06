import { useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import { FormErrorMessage, FormControl, Input, Button } from '@chakra-ui/react'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Confetti from 'react-dom-confetti'
import classNames from 'classnames'

export interface HookFormProps {
  theme: string
}

export const HookForm = ({ theme = '' }) => {
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
          setMessageData({
            message: '👍 that worked, thanks for subscribing.',
            status: 'success'
          })
          setTimeout(() => {
            setsomeProp(!someProp)
          }, 100)
        }
        resolve({})
      } catch (e) {
        console.log('error: ', e)
        setMessageData({ message: e.result.error.message, status: 'error' })
      }
    })
  }

  const config = {
    angle: 81,
    spread: 68,
    startVelocity: 61,
    elementCount: 95,
    dragFriction: 0.15,
    duration: 2950,
    stagger: 11,
    width: '10px',
    height: '10px',
    perspective: '899px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} id="sign_up_form">
        <p
          className={classNames(
            'text-lg mb-5 font-PlayfairDisplay text-center',
            {
              'text-wall': theme === 'light'
            }
          )}
        >
          Enter your email to subscribe to the occasional update from me.
        </p>
        <div className="flex flex-col md:flex-row mx-auto gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full md:w-1/2 mx-auto flex flex-col align-top items-center justify-around"
          >
            <FormControl className="w-5/6 md:w-1/2 mx-auto">
              <Input
                id="email"
                placeholder="Join the conversation"
                className="appearance-none rounded-full w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              width="50px"
              height="50px"
              className={classNames(
                'rounded-full p-4 md:ml-2 hover:shadow-md text-white hidden md:block relative mt-8 z-30 bg-golden'
              )}
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
