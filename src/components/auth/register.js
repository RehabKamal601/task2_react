import React, { useState, useEffect } from 'react';
import { Form, Button, Container, InputGroup, Alert } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './Register.css';

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^\S+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    const formIsValid = Object.values(errors).every(error => !error) && 
                       Object.values(form).every(field => field.trim());
    setIsValid(formIsValid);
  }, [form, errors]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    switch (name) {
      case 'email':
        setErrors(prev => ({
          ...prev,
          email: !value ? "Email is required" :
                !emailRegex.test(value) ? "Invalid email" : ""
        }));
        break;
      case 'name':
        setErrors(prev => ({
          ...prev,
          name: !value ? "Name is required" : ""
        }));
        break;
      case 'username':
        setErrors(prev => ({
          ...prev,
          username: !value ? "Username is required" :
                   !usernameRegex.test(value) ? "No spaces allowed" : ""
        }));
        break;
      case 'password':
        setErrors(prev => ({
          ...prev,
          password: !value ? "Password is required" :
                   !passwordRegex.test(value)
                     ? "At least 8 chars, uppercase, lowercase, digit & special char"
                     : ""
        }));
        if (form.confirmPassword) {
          setErrors(prev => ({
            ...prev,
            confirmPassword: form.confirmPassword !== value 
                           ? "Passwords do not match" 
                           : ""
          }));
        }
        break;
      case 'confirmPassword':
        setErrors(prev => ({
          ...prev,
          confirmPassword: !value ? "Please confirm your password" :
                         value !== form.password ? "Passwords do not match" : ""
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setSuccess("Registration successful!");
    //   console.log('Registration data:', form);
      
    //   setTimeout(() => {
    //     setSuccess(null);
    //     setForm({
    //       email: '',
    //       name: '',
    //       username: '',
    //       password: '',
    //       confirmPassword: ''
    //     });
    //   }, 3000);
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Register</h2>

      {success && <Alert variant="success" onClose={() => setSuccess(null)} dismissible>
        {success}
      </Alert>}

      <form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleInput}
            isInvalid={!!errors.email}
            isValid={form.email && !errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
          {form.email && !errors.email && (
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={form.name}
            onChange={handleInput}
            isInvalid={!!errors.name}
            isValid={form.name && !errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={form.username}
            onChange={handleInput}
            isInvalid={!!errors.username}
            isValid={form.username && !errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleInput}
              isInvalid={!!errors.password}
              isValid={form.password && !errors.password}
            />
            <Button 
              variant="outline-secondary" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleInput}
            isInvalid={!!errors.confirmPassword}
            isValid={form.confirmPassword && !errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          type="submit"
          variant="success"
          className="w-100"
          disabled={!isValid}
        >
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;