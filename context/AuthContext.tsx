import { useContext, createContext, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "config/firebase";
import { useRouter } from "next/router";
import { User } from "firebase/auth";

const AuthContext = createContext({
  googleSignIn: () => {},
  googleLogOut: () => {},
  user: {} as User,
});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as User);
  const router = useRouter();

  const googleLogOut = async () => {
    await signOut(auth);
    localStorage.setItem("user", JSON.stringify(false));
    router.push("/");
    setUser({} as User);
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then(() => {
        router.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser !== undefined && currentUser !== null) {
      setUser(currentUser);
      localStorage.setItem("user", JSON.stringify(true));
    }
  });

  const data = { googleSignIn, googleLogOut, user };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
