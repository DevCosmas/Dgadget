import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

function GoogleLoginButton() {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Login Success:', tokenResponse);
      const userInfo = await fetch(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        }
      );
      const profile = await userInfo.json();
      console.log('User Info:', profile);
    },
    onError: (error) => {
      console.log('Login Failed:', error);
    },
  });

  return <button onClick={() => login()}>Sign in with Google</button>;
}

export default GoogleLoginButton;
