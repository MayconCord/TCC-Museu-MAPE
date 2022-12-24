import React from "react";

function PainelAluno() {

    const fetchData = async (turma) => {
        let list = [];
        await db.collection("alunos").where("turma", "==", turma).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                list.push({id: doc.id, ...doc.data()})
            });
            setData(list);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return(
        <div>
            <div className="text-center">
                <h1 className="p-5">Painel do Aluno</h1>
                <h3>Nome</h3>
                <h3>Email</h3>
                <h3>Pontuacao</h3>
            </div>
        </div>
    );
}

export default PainelAluno;