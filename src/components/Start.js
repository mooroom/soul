import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;

const Start = () => {
  return (
    <Container className="container">
      <div className="row align-items-center">
        <button type="button" className="col btn btn-primary">
          Start
        </button>
      </div>
    </Container>
  );
};

export default Start;
