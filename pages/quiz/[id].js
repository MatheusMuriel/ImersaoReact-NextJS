import React from 'react';

export default function QuizDaGaleraPage() {
  return (
    <div>
      Desafio da próxima aula junto com as animações
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
