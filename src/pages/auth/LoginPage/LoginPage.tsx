import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { FiLogIn } from 'react-icons/fi';

import { authActions } from 'sapredux/actions';
import { RootState } from 'sapredux/reducers';

export const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const loading = useSelector((state: RootState | any) => {
    return state.auth.loading;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    if (username && password) {
      dispatch(authActions.login(username, password));
    }
  };

  return (
    <div className="font-sans text-gray-700">
      <div className="container flex p-12 mx-auto">
        <div className="w-full max-w-md mx-auto">
          <div className="mt-6 mb-6 text-4xl font-thin text-center">
            Logo
          </div>

          <div className="overflow-hidden shadow-loginShadow bg-glass rounded-2xl backdrop-filter backdrop-blur-glass">
            <div className="p-8">
              <form method="GET" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    autoFocus
                    className="w-full px-8 py-4 text-sm font-medium placeholder-white transition-all duration-200 border border-transparent focus:border-white focus:outline-none focus:bg-glass focus:bg-white bg-glass rounded-2xl backdrop-filter backdrop-blur-glass"
                    inputMode="text"
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    placeholder={t('auth.username')}
                  />
                  {submitted && !username && (
                    <div className="invalid-feedback">Username is required</div>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    className="w-full px-8 py-4 text-sm font-medium placeholder-white transition-all duration-200 border border-transparent focus:border-white focus:outline-none focus:bg-glass focus:bg-white bg-glass rounded-2xl backdrop-filter backdrop-blur-glass"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder={t('auth.password')}
                  />
                  {submitted && !password && (
                    <div className="invalid-feedback">Password is required</div>
                  )}
                </div>

                {loading && (
                  <span className="mr-1 spinner-border spinner-border-sm">Loading spinner))) ....</span>
                )}
                <button
                  className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-white transition-all duration-300 ease-in-out bg-glass hover:bg-blueGlass focus:shadow-outline focus:outline-none rounded-2xl backdrop-filter backdrop-blur-glass"
                  type="submit"
                >
                  <FiLogIn />
                  <span className="ml-3">{t('auth.login')}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
