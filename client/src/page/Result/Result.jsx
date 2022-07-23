import React, { useContext } from 'react';
import { AnswerDataContext } from '../App';
import { useQuery } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  /* width: 100%;
        height: 100%; */
  padding: 10px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
`;
const FoodImg = styled.img`
  width: 300px;
  height: 150px;
`;
const Button = styled.button`
  text-align: center;
  height: 2.25rem;
  font-size: 1rem;
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 30px;
  margin-top: 30px;
  background: white;
  display: flex;
  background-color: #f08080;
`;

// age: "young"
// ingredient: "seafood"
// money: "middle"
// mood: "soso"
const Result = () => {
  const { answerData } = useContext(AnswerDataContext);
  console.log(answerData);
  const { data} = useQuery('food', () => {
    return axios.get('http://localhost:5000/api/food');
  });

  console.log(answerData);
  return (
    <>
      <Title>이거머글랭?</Title>
      <Container>
        {data.map((food) => (
          <div>
            <FoodImg src="https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_2175525_20220630163907792.png" />
            <div key={food.name}>{food.name}</div>
            <span key={food.comment}>{food.comment}</span>
          </div>
        ))}
        <div>
          <Button key="1">이메뉴로 결정하기</Button>
          <Button key="2">메뉴 선택 다시하기</Button>
          <Button key="3">나의 메뉴공유하기</Button>
        </div>
      </Container>
    </>
  );
};

export default Result;