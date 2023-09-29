import React from 'react';
import styled from 'styled-components';
import { projects } from '../../data/constant';
import ProjectCard from '../Cards/ProjectCard';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;

const project = ({openModal,setOpenModal}) => {
  return (
    <Container id='projects'>
        <Wrapper>
            <Title> Project-Name</Title>
            <Desc>Work some projects which as follows</Desc>
        </Wrapper>
        <CardContainer>
            {
                projects
                .map((project) => (
                  <ProjectCard  project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                ))}
              {/* {projects
                .filter((item) => item.category == toggle)
                .map((project) => (
                  <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                ))
            } */}
        </CardContainer>   
    </Container>
  )
}

export default project
