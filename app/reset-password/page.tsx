'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useNavigation } from '@/hooks/useNavigation';

const ResetPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { navigateTo } = useNavigation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    // In a real application, you would send an API request here
    // For this example, we'll just simulate success/failure
    if (email === 'test@example.com') {
      setMessage('Password reset link sent to your email!');
    } else {
      setError('Email not found. Please try again.');
    }
  };

  return (
    <section
      id="reset-password"
      className="py-20 sm:py-24 lg:py-32 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md">
        <div className="bg-ios-panel dark:bg-ios-panel-dark p-8 rounded-2xl shadow-lg border border-ios-border dark:border-ios-border-dark text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Reset Your Password
          </h2>
          <p className="text-ios-text-secondary dark:text-ios-text-secondary-dark mb-6">
            Enter your email address and we&apos;ll send you a link to reset your
            password.
          </p>
          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-4">
              <span className="block sm:inline">{message}</span>
            </div>
          )}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              id="reset-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
          <p className="mt-6 text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">
            <Link
              href="/login"
              onClick={() => navigateTo('login')}
              className="font-medium text-ios-blue hover:text-opacity-80 transition-colors"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordPage;
