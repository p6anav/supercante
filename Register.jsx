import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  return (
    <div className="min-h-[140vh] flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <h2 className="text-center text-2xl font-semibold mb-6">Create Your Account</h2>

        <div className="flex gap-6 mb-4">
          <div className="flex-1">
            <label className="block mb-1 text-lg font-medium">First Name</label>
            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-gray-400" />
              <input
                type="text"
                className="pl-10 pr-3 py-3 bg-gray-700 rounded-md w-full text-white placeholder-gray-400 text-lg"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-lg font-medium">Last Name</label>
            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-gray-400" />
              <input
                type="text"
                className="pl-10 pr-3 py-3 bg-gray-700 rounded-md w-full text-white placeholder-gray-400 text-lg"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-lg font-medium">Username</label>
          <div className="relative">
            <FaUser className="absolute top-4 left-3 text-gray-400" />
            <input
              type="text"
              className="pl-10 pr-3 py-3 bg-gray-700 rounded-md w-full text-white placeholder-gray-400 text-lg"
              placeholder="Username"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-lg font-medium">Email</label>
          <div className="relative">
            <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
            <input
              type="email"
              className="pl-10 pr-3 py-3 bg-gray-700 rounded-md w-full text-white placeholder-gray-400 text-lg"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="mb-2">
          <label className="block mb-1 text-lg font-medium">Password</label>
          <div className="relative">
            <FaLock className="absolute top-4 left-3 text-gray-400" />
            <input
              type="password"
              className="pl-10 pr-3 py-3 bg-gray-700 rounded-md w-full text-white placeholder-gray-400 text-lg"
              placeholder="Password"
            />
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-4">Minimum length is 8 characters.</p>

        <button className="bg-red-400 hover:bg-red-500 text-white w-full py-3 rounded-md font-semibold text-lg mb-4">
          Sign Up
        </button>

        <p className="text-xs text-gray-400 text-center mb-2">
          By creating an account, you agree to the{' '}
          <a href="#" className="underline text-white">Terms of Service</a>. We'll occasionally send you account-related emails.
        </p>

        <p className="text-sm text-center text-white mb-2">
          Already have an account?{' '}
          <a href="#" className="text-yellow-400 hover:underline">Login</a>
        </p>

        <p className="text-center text-blue-400 text-sm hover:underline cursor-pointer">
          Sign in with Google
        </p>
      </div>
    </div>
  );
};

export default Register;
