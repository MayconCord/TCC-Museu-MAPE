import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../servers/config';
import { db } from "../servers/config";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [e, setE] = useState(null);
    const [c, setC] = useState(null);
    const [cadErro, setCadErro] = useState(null);
    const [cadSucess, setCadSucess] = useState(null);
    const [errosQuiz, setErrosQuiz] = useState([]);

    useEffect(()=>{
        const loadStorageData = () => {
            const storageUser = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"));
            if (storageUser) {
                setUser(storageUser);
            }
        };
        loadStorageData();
    }, []);

    const cadastro = (nome, email, password, turma) => {
        auth.createUserWithEmailAndPassword(
            email, password
        ).then((res) => {
            //console.log(res)
            salvaDados(nome, email, turma, res.user.uid);
            console.log("cadastro realizado com sucesso!");
            setUser(res.user);
            setCadSucess("Cadastro realizado com sucesso!");
        }).catch(error => {
            console.log(error);
            setCadErro(error.message);
        })
    }

    const salvaDados = async (nome, email, turma, userId) => {
        //localStorage.setItem("@Auth-firebase:turma", turma);
        //localStorage.setItem("@Auth-firebase:user", user);
        await db.collection("alunos").doc(userId).set({
            nome: nome,
            email: email,
            turma: turma,
            pontuacao: 0,
            tentativa: 1,
        }).then((docRef)=>{
            //console.log("Dado salvo em " + docRef);
        }).catch(error => {
            console.log(error);
        });
    }

    const salvaPontuacao = async (pontuacao) => {
        await db.collection("alunos").doc(user.uid).update({
            pontuacao: pontuacao,
        }).then((res) => {
            console.log("Pontuacao setada ", res)
            console.log(pontuacao)
        }).catch((erro) => {
            console.log(erro)
        })
    }

    const login = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            setUser(res.user);
            sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(res.user));
            setC("Login realizado com sucesso!");
        }).catch(error => {
            console.log(error);
            setE(error.message);
        });
    }

    
    const logout = (e) => {
        auth.signOut().then((res) => {
            console.log("Voc?? saiu da sua conta com sucesso!");
            sessionStorage.removeItem("@AuthFirebase:user");
            setUser(null);
        })
        .catch((e) => console.log(e));
    }

    const salvaTentativa = async (tent) => {
        await db.collection("alunos").doc(user.uid).update({
            tentativa: tent,
        }).then((res) => {
            console.log("N??mero de tentativas setado! ", tent)
        }).catch((erro) => {
            console.log(erro)
        })
    }

    const pegaTentativa = async () => {
        let t = "";
        await db.collection("alunos").doc(user.uid).get().then((doc) =>{
            t = doc.data();
            //console.log(t.tentativa+1);
            let res = t.tentativa+1;
            console.log(res);
            salvaTentativa(res);
        }).catch(error => {
            console.log("Erro pegaTentativa");
            console.log(error);
        });
    }

    const recoverPassword = (email) => {
        var res = "";
        auth.sendPasswordResetEmail(email).then(() => {
            console.log(email)
            console.log("Email de recupera????o enviado! Verifique sua caixa de entrada");
        }).catch((error) => {
            console.log(error);
            res = error;
        });
    }

    return <AuthContext.Provider value={{user, signed: !!user , cadastro, login, e, c, cadErro, cadSucess, salvaDados, errosQuiz, setErrosQuiz, salvaPontuacao, recoverPassword, pegaTentativa }}>{children}</AuthContext.Provider>
}