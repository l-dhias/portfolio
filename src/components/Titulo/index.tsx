import { Titulo as Title } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

export const Titulo = (props: Props) => (
  <Title fontSize={props.fontSize}>{props.children}</Title>
)
