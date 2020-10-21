import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.8;
`;
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;
export const ModalC = styled.div`
  z-index: 100;
  background: var(--color-background);
  position: relative;
  margin: 1.75rem auto;
  border-radius: 5px;
  max-width: 50%;
  padding: 1rem;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    background-color: var(--color-primary);
    font-size: 0.9rem;
    font-weight: 700;
    border: none;
    border-radius: 3px;
    padding: 0.3rem 1rem;
    margin-left: 0.5rem;

    &:hover {
      background-color: var(--color-primary-dark);
      transition: background-color 0.2s;
    }
  }
`;
