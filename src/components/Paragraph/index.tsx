import { ReactNode } from 'react'
import { P } from './styles'

export type Props = {
  children: ReactNode
  tipo?: string
  fontSize?: number
}

const Paragraph = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragraph
