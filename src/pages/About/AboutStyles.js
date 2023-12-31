import styled from "styled-components";

export const AboutWrapper = styled.section`
  max-width: 100vw;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  color: #f5f5f5;
  display: block;
  line-height: 1.6;
  letter-spacing: 1px;
  font-family: "PT Sans", sans-serif;
  margin-top: 60px;
  padding: 20px;
  border-radius: 15px;
  background-color: #131415;

  section{
    max-width: 900px;
    margin  :0 auto ;
    padding: 10px;
    margin-top: 20px;

  }
  

  h2 {
    text-align: center;
    span {
      font-family: "PT Sans", sans-serif;
    }
    padding: 10px;
  }
  p {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
    line-height: 1.6;
    letter-spacing: 1px;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
`;

export const MediaWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  object-fit: contain;
  overflow: hidden;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  video {
    border-radius: 15px;
    max-width: 100vw;
    margin: 0 auto;
    width: fit-content;
  }
`;
