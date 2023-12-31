import styled from "styled-components";

export const ProductosWrapper = styled.section`
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  font-family: "PT Sans", sans-serif;
  @media (min-width: 320px) {
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    color: #f5f5f5;
    font-size: 35px;
    margin-top: 60px;
  }
`;

export const ProductosContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  height: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  margin-bottom: 20px;
  color: #f5f5f5;
  gap: 5px;
  @media (max-width:767px){
    flex-flow: wrap;
    gap: 10px;
  }
`;
export const ProductosCard = styled.div`
  width: 310px;
  height: 450px;
  overflow: hidden;
  margin: 1px;
  border-radius: 3px;
  position: relative;

  img {
    height: 450px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    transition: all ease-in-out 0.3s;
  }
  img:hover {
    transform: scale(1.2) rotate(-5deg);
    cursor: pointer;
  }
  
  @media (max-width:767px){
    img:hover {
    transform: none;
    cursor: pointer;
  }

  }

  .intro {
    width: 320px;
    height: 70px;
    color: #f5f5ff;
    background: rgb(27, 27, 27, 0.5);
    letter-spacing: 1px;
    text-align: center;
    line-height: 1.6;
    font-family: var(--secondaryFont);
    position: absolute;
    bottom: 0.5px;
    padding: 6px;
    user-select: none;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }

  .intro .btn-moreInfo {
    display: block;
    justify-items: center;
    align-content: center;
    bottom: 10px;
    margin: 10px;
    padding: 5px;
  }
  .intro .btn-moreInfo button {
    outline: none;
    background: #6e6043;
    border-radius: 15px;
    color: #efefef;
    border: none;
    color: #ffffff;
    text-align: center;
    font-size: 20px;
    padding: 5px;
    width: 120px;
    transition: all 0.5s;
    cursor: pointer;
 
  }
  .intro .btn-moreInfo button:hover {
      background-color: #f4511e;
    box-shadow: -8px 9px 10px rgba(0, 0, 0, 0.2);
    }
  .intro h2 {
    margin: 10px;
    font-size: 35px;
  }
  p {
    visibility: hidden;
    opacity: 0;
  }

  .intro:hover {
    height: 220px;
    background: #000;
  }
  .intro:hover p {
    visibility: visible;
    opacity: 1;
  }

  .oferta-icon {
    width: fit-content;
    height: 40px;
    background: #6e6043;
    color: #efefef;
    position: absolute;
    bottom: 400px;
    left: 0;
    padding: 6px;
    font-weight: 700;
  }
  @media (max-width: 980px) {
    .card-item {
      margin: 10px;
    }
  }
`;

export const ContainerPrice = styled.div`
  width: fit-content;
  height: 40px;
  background: #6e6043;
  color: #efefef;
  position: absolute;
  bottom: 400px;
  left: 0;
  padding: 6px;
  margin-right: 3px;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "PT Sans", sans-serif;
  border-radius: 0px 3px 3px 0px;
`;
export const ContainerBtnAdd = styled.div`
  width: fit-content;
  height: 40px;
  position: absolute;
  bottom: 410px;
  right: 0;
  margin-right: 0px;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "PT Sans", sans-serif;
  border-radius: 10px 10px 10px 10px;

  button {
    display: inline-block;
    border-radius: 0px 5px 0px 10px;
    background: #6e6043;
    /* background-color: #f4511e; */
    border: none;
    color: #ffffff;
    text-align: center;
    font-size: 20px;
    padding: 10px;
    width: 120px;
    transition: all 0.5s;
    cursor: pointer;
    right: 0;
  }
  button:hover {
    background-color: #f4511e;
    box-shadow: -8px 9px 10px rgba(0, 0, 0, 0.2);
  }
  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  span:after {
    content: " +";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  &:hover span {
    padding-right: 25px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.75rem;
  font-family: "PT Sans", sans-serif;
  user-select: none;
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
`;

/* @media (max-width: 980px)
<style>
.hrqlKA .nav__menu ul {
    display: block;
}

@media (max-width: 992px)
<style>
.hrqlKA .nav__menu ul {
    display: none;
    position: fixed;
    background: bisque;
    padding: 50px;
    opacity: 0.9;
    margin: 46px;
    border-radius: 0px 10px;
    width: 300px;
    height: 100vh;
} */