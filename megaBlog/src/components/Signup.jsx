import React, { useState } from 'react'
import { authService } from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { Button, Input, Logo } from './index'
import { set, useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')

    const create = async (data) => {
        setError('')
        try {
            const user = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='flex items-center justify-center'>
            <div className={`mx-auto w-full max-w-lg rounded-xl bg-gray-100 border p-10 border-black/10`}>
                <span className='inline-block w-full max-w-25'> <Logo width='100%' /> </span>
            </div>
            <h2 className='text-2xl font-bold'>Sign Up</h2>
            <p className='mt-2 text-center text-base text-black/60'> Already have an account? <Link to='/login' className='text-blue-500 hover:underline'>
                Login
            </Link>
            </p>
            {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
            <form onSubmit={handleSubmit(create)} className="mt-4">
                <div className='space-y-5'>
                    <Input label='Name' placeholder='Enter your name' {...register('name', { required: true })} />

                    <Input
                        label='Email'
                        placeholder='Enter your email'
                        type='email'
                        {...register('email', {
                            required: true, validate: {
                                matchPattern: (value) => { /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value) || 'Please enter a valid email address' }
                            }
                        })}
                    />

                    <Input label='Password' placeholder='Enter your password' type='password' {...register('password', { required: true })} />

                    <Button type='submit' className='w-full'>Sign Up</Button>
                </div>
            </form>
        </div>
    )
}

export default Signup