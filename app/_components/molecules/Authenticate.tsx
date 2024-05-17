"use client";
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from 'firebase/auth';
import { firebaseConfig } from '../../_utilities/firebase';
import { Modal, Input, Button, Divider } from 'antd';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const Authenticate = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // User signed up successfully
      console.log(userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // User signed in successfully
      console.log(userCredential.user.accessToken);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // Google user signed in successfully
      console.log(result.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      // Facebook user signed in successfully
      console.log(result.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleTwitterSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, twitterProvider);
      // Twitter user signed in successfully
      console.log(result.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Modal title="Login" open={isOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
      <div className="flex flex-col gap-3">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-col gap-3">
          <Button onClick={handleSignUp}>Sign Up</Button>
          <Button onClick={handleSignIn}>Sign In</Button>
          <Divider plain>Or</Divider>
          <Button onClick={handleGoogleSignIn}>Sign In with Google</Button>
          <Button onClick={handleFacebookSignIn}>Sign In with Facebook</Button>
          <Button onClick={handleTwitterSignIn}>Sign In with Twitter</Button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </Modal>
  );
}

export default Authenticate;
