import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo, quasi
      rerum repellendus sequi id unde aspernatur est et atque tempora quam nulla
      ducimus molestiae nisi alias hic porro beatae!
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=l-dhias&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=l-dhias&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)
export default Sobre
