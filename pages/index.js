import styled from 'styled-components';
import db from '../db.json';
import { Footer, GitHubCorner, QuizBackground, QuizLogo, Widget, ThemeSelect  } from '../src/components/index.js';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return(
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <ThemeSelect />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/nadfelipe" />
    </QuizBackground>
  );
}
