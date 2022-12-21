import { createContext, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { auth } from '../servers/config'

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [e, setE] = useState(false);
    const [c, setC] = useState("");

    useEffect(()=>{
        const loadStorageData = () => {
            const storageUser = sessionStorage.getItem("@AuthFirebase:user");
            if (storageUser) {
                setUser(storageUser);
            }
        };
        loadStorageData();
    });

    const cadastro = (email, password) => {
        auth.createUserWithEmailAndPassword(
            email, password
        ).then((res) => {
            //console.log("cadastro realizado com sucesso!");
            setUser(res.user);
            setC("Cadastro realizado com sucesso!");
            sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(res.user));
        }).catch(error => {
            console.log(error.code)
        })
    }

    const login = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            //console.log("login realizado com sucesso");
            setUser(res.user);
            setC("Login realizado com sucesso!")
            sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(res.user));
            console.log(res.user);
        }).catch(error => {
            console.log(error);
            setE(error);
        });
    }

    return <AuthContext.Provider value={{user, signed: !!user , cadastro, login, e, c}}>{children}</AuthContext.Provider>
}