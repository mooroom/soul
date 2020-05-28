import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Start = () => {
  return (
    <Container>
      <h1>soul</h1>
      <button type="button" className="btn btn-primary">
        Start
      </button>
    </Container>
  );
};

export default Start;
