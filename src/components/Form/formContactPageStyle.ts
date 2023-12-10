import styled from "styled-components";

export const ListMainContactStyle = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 50px;

  input {
    width: 90%;
    height: 40px;
    border-radius: 8px;
    padding-left: 15px;
  }
  textarea {
    width: 90%;
    height: 100px;
    border-radius: 8px;
    padding-left: 15px;
    padding-top: 10px;
  }

  textarea {
    width: 90%;
  }

  @media (min-width: 800px) {
    input {
      width: 80%;
    }

    textarea {
      width: 80%;
    }
  }
  @media (min-width: 1000px) {
    input {
      width: 70%;
    }

    textarea {
      width: 70%;
    }
  }

  @media (min-width: 1200px) {
    input {
      width: 60%;
    }

    textarea {
      width: 60%;
    }
  }
`;

export const InputContactPageStyle = styled.input`
  background-color: var(--primary-color);
  color: var(--text-dark);
  font-weight: bold;
  font-size: 19px;

  cursor: pointer;

  &:hover {
    background-color: var(--title-nav);
  }
`;
