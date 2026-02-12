import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')

    const login = async (data) => {
        setError('')
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService
                    .getCurrentUser()
                if (userData) dispatch(authLogin(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className={`mx-auto w-full max-w-lg bg-gray-100 
        rounded-xl p-10 border border-black/10`} >
            <div className='flex justify-center mb-2'>
                <span className='inline-block w-full max-w-25'>
                    <Logo width='100%' />
                </span>
            </div>
            <div>
                <h2 className='text-2xl font-bold text-center mb-4'>Login to your account</h2>
                <p className='text-center text-sm mb-6'>
                    Don't have an account?
                    <Link to='/signup' className='text-blue-500'>Register</Link>
                </p>
                {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
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
                        <Input
                            label='Password'
                            placeholder='Enter your password'
                            type='password'
                            {...register('password', { required: true })}
                        />
                        <Button type='submit' fullWidth>
                            Sign In
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login