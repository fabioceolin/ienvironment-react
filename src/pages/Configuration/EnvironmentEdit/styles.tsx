import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

export const HeaderContent = styled.div`
  display: flex;

  img {
    border-radius: 5px;
    max-width: 250px;
  }

  div {
    margin: 0 20px;

    p {
      font-size: 12px;
      color: var(--color-text-secundary);
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  margin: 20px;

  svg + svg {
    margin-left: 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 20px;
`;
