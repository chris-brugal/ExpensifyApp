import {firebase, googleAuthProvider, facebookAuthProvider} from '../firebase/firebase';

export const login = (uid) => {
    return{
        type: 'LOGIN',
        uid
    };
};

export const startLogin = () => {
    return () => {
        console.log('google');
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startFacebookLogin = () => {
    return () => {
        console.log('facebook');
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}

export const logout = () => {
    return{
        type: 'LOGOUT'
    };
};