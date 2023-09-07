import Styled, { styled }  from "styled-components";

export const SuscribeStyled = styled.section` 
 max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  place-content: center;
  
.newsletter-container{
font-size: 14px;
color: #efefef;
font-family: "Lato",Helvetica,Arial,sans-serif;
box-sizing: inherit;
margin-top: 50px;
margin-bottom: 50px;
padding: 50px;
text-align: center;
}
.section-newsletter-home h2, p{
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.6;
  padding: 10px;

}
.section-newsletter-home p {
  font-size: 16px;
}
.newsletter-container{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
}
.section-newsletter-home .email-inp {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  padding: 10px;
  margin: 15px;
}
.section-newsletter-home .btn-primary {
  width: 200px;
  padding: 15px;
  cursor: pointer;
  background: none;
  border: none;
  color: #efefef;
  font-weight: 700;
  font-size: 16px;
  border-bottom: solid 5px #6e6043;
  transition: all ease-in-out .2s;
}
.section-newsletter-home .btn-primary:hover{
  background: #6e6043;
}
`;