import {
  HTML,
  CSS,
  Less,
  Sass,
  StyledComponents,
  Gulp,
  Grunt,
  Figma,
  Babel,
  JQuery,
  Bootstrap,
  JavaScript,
  TypeScript,
  NodeJs,
  Redux,
  React,
  Vue,
  VsCode,
  GitHub,
  Git,
} from '../../components/Skill'
import { ConatinerSkill, ListaSkill } from './styles'
import { Titulo } from '../../components/Titulo'

export const Skills = () => (
  <>
    <Titulo fontSize={30}>Habilidade</Titulo>
    <ConatinerSkill id="skills">
      <ListaSkill>
        <li>
          <HTML />
        </li>
        <li>
          <CSS />
        </li>
        <li>
          <Less />
        </li>
        <li>
          <Sass />
        </li>
        <li>
          <StyledComponents />
        </li>
        <li>
          <Gulp />
        </li>
        <li>
          <Grunt />
        </li>
        <li>
          <Figma />
        </li>
        <li>
          <Babel />
        </li>
        <li>
          <JQuery />
        </li>
        <li>
          <Bootstrap />
        </li>
        <li>
          <JavaScript />
        </li>
        <li>
          <TypeScript />
        </li>
        <li>
          <NodeJs />
        </li>
        <li>
          <Redux />
        </li>
        <li>
          <React />
        </li>
        <li>
          <Vue />
        </li>
        <li>
          <VsCode />
        </li>
        <li>
          <GitHub />
        </li>
        <li>
          <Git />
        </li>
      </ListaSkill>
    </ConatinerSkill>
  </>
)
