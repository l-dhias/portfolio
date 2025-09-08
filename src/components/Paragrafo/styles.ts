import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  color: ${(props) => (props.tipo === 'primario' ? '#94a3b8' : '#fcfcfcff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 25px;
  text-align: justify;

  @media (max-width: 768px) {
    display: flex;
    font-size: 18px;
    line-height: 22px;
  }

  @media (max-width: 320px) {
    display: flex;
    font-size: 16px;
    line-height: 18px;
  }
`
