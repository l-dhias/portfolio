import styled from 'styled-components'

import { Props } from '.'

export const Titulo = styled.h3<Props>`
  text-align: center;
  color: #e2e8f0;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  margin-bottom: 40px;
`
