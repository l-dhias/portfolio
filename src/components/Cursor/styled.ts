import styled from 'styled-components'

export const CursorDiv = styled.div<{ x: number; y: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background: rgba(43, 107, 176, 0.12);
  box-shadow:
    0 0 1000px #2b6bb03b,
    0 0 1000px #2b6bb027;
  pointer-events: none;
  transform: ${({ x, y }) => `translate(${x}px, ${y}px) translate(-50%, -50%)`};
  transition: transform none;
  z-index: 999;

  @media (max-width: 768px) {
    display: none;
  }
`
