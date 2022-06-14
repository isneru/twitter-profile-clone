import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;

  border: 1px solid var(--primary);
  border-radius: 16px;
  overflow: hidden;
`;

export const Photo = styled.div`
  width: 120px;
  height: 90px;

  background: var(--gray);

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
