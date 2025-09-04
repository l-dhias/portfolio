import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'primario' | 'secundario'
  fontSize?: number
}

export const Paragrafo = ({ children, tipo = 'primario', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)
