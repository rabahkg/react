import React, { useState } from 'react'
import './Form.css'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form>

            {/* name */}
            <div>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='name'
                />
            </div>

            {/* email */}
            <div>
                <input
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='email'
                />
            </div>

            {/* age */}
            <div>
                <input
                    type='text'
                    name='age'
                    value={formData.age}
                    onChange={handleChange}
                    placeholder='age'
                />
            </div>

            {/* password */}
            <div>
                <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='password'
                />
            </div>

            {/* confirm password */}
            <div>
                <input
                    type='password'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder='confirm password'
                />
            </div>

            {/* gender */}
            <div>
                <label>
                    <input
                        type='radio'
                        name='gender'
                        value='male'
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                    />
                    male
                </label>

                <label>
                    <input
                        type='radio'
                        name='gender'
                        value='female'
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                    />
                    female
                </label>
            </div>

            <button type='submit'>submit</button>
        </form>
    )
}

export default Form;
