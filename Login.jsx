import React from 'react';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="bg-gray-800 rounded-xl p-10 w-full max-w-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-8">Login</h2>
        
        <form>
          {/* Username/Email */}
          <div className="mb-6">
            <label className="block text-base mb-2"> email</label>
            <div className="relative">
              <i className="fas fa-user absolute top-4 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Email"
                className="pl-10 pr-3 py-3 bg-gray-700 rounded-md w-full text-white placeholder-gray-400 text-lg"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <div className="flex justify-between text-base mb-2">
              <label>Password</label>
              <a href="#" className="text-yellow-300 hover:underline">Forgot Password?</a>
            </div>
            <div className="relative">
              <i className="fas fa-lock absolute top-4 left-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="pl-10 pr-10 py-3 bg-gray-700 rounded-md w-full text-white placeholder-gray-400 text-lg"
              />
              <i className="fas fa-eye-slash absolute top-4 right-3 text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-8">
            <input type="checkbox" id="remember" className="mr-2 accent-yellow-300 w-4 h-4" />
            <label htmlFor="remember" className="text-base">Remember Me</label>
          </div>

          {/* Log In Button */}
          <button
            type="submit"
            className="w-full bg-red-400 text-black py-3 text-lg rounded hover:bg-red-500 transition"
          >
            Log In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-base mt-8">
          Do not have an account?{' '}
          <a href="#" className="text-yellow-300 hover:underline">Sign Up</a>
        </p>

        {/* Footer */}
        <div className="flex justify-center space-x-4 text-sm mt-10 text-gray-400">
          <a href="#" className="hover:underline">Terms</a>
          <span>•</span>
          <a href="#" className="hover:underline">Privacy</a>
          <span>•</span>
          <a href="#" className="hover:underline">Docs</a>
          <span>•</span>
          <a href="#" className="hover:underline">Helps</a>
        </div>

        {/* Language selector */}
        <div className="flex justify-center items-center mt-4 text-sm text-gray-400">
          <i className="fas fa-globe mr-2" />
          English
        </div>
      </div>
    </div>
  );
}

export default Login;
