/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <div>
      <ThemeProvider theme={dbExterno.theme}>
        <QuizScreen
          externalQuestions={dbExterno.questions}
          externalBg={dbExterno.bg}
        />
      </ThemeProvider>

      {/* <pre style={{ color: 'black' }}>
        {JSON.stringify(dbExterno.questions, null, 4)}
      </pre> */}

    </div>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((resServer) => {
        if (resServer.ok) {
          return resServer.json();
        }
        throw new Error('Erro em pegar os dads');
      })
      .then((resConvertidaEmObjeto) => resConvertidaEmObjeto);
      // .catch((err) => {
      //   // eslint-disable-next-line no-console
      //   console.log(err);
      // });

    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    // redirect...
    throw new Error(err);
  }
}
