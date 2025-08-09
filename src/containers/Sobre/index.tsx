import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph tipo="secundario">
      Sou Leonardo, desenvolvedor front-end júnior, apaixonado por transformar
      ideias em experiências digitais que fazem sentido, tanto visual quanto
      funcionalmente. Para mim, o front-end vai muito além de escrever linhas de
      código: é traduzir conceitos em interfaces vivas, acessíveis e intuitivas.
      Tenho como base as tecnologias fundamentais da web (HTML, CSS e
      JavaScript), mas meu verdadeiro diferencial está na forma como enxergo
      cada projeto como uma oportunidade de aprender, evoluir e contribuir de
      forma criativa. Valorizo organização, clareza e propósito em tudo o que
      faço. Estou em constante aprendizado, não apenas sobre ferramentas ou
      frameworks, mas também sobre pessoas, usabilidade e os pequenos detalhes
      que tornam uma interface realmente boa.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=l-dhias&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=l-dhias&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)
export default Sobre
