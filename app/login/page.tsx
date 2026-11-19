'use client';

import { useState } from 'react';
import Container from '../components/ui/Container';
import Title from '../components/ui/Title';
import Button from '../components/ui/Button';

const LoginPage = () => {
  const [message, setMessage] = useState('');

  return (
    <Container className="max-w-lg py-12">
      <Title level={1} className="mb-6">Iniciar sesión</Title>
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          setMessage('La autenticación no está configurada en esta demostración.');
        }}
      >
        <label className="block text-sm font-medium text-gray-700">
          Correo electrónico
          <input required type="email" autoComplete="email" className="mt-1 w-full rounded border border-gray-300 px-3 py-2" />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Contraseña
          <input required type="password" autoComplete="current-password" className="mt-1 w-full rounded border border-gray-300 px-3 py-2" />
        </label>
        <Button type="submit" variant="primary" size="lg" fullWidth>Continuar</Button>
        {message && <p role="status" className="text-sm text-gray-600">{message}</p>}
      </form>
    </Container>
  );
};

export default LoginPage;