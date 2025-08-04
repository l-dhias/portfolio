import styled from 'styled-components'

import { Props } from '.'

export const Title = styled.h3<Props>`
  color: #c4c4c5ff;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
