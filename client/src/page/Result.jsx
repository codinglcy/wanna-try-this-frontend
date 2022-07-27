import React, { useContext } from 'react';
import { AnswerDataContext } from '../App';
import { useQuery } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
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

const Result = () => {
  const { answerData } = useContext(AnswerDataContext);
  console.log(answerData);



  const answerUrl = Object.entries(answerData);
  const url = `?${answerUrl[0][0]}=${answerUrl[0][1]}&${answerUrl[1][0]}=${answerUrl[1][1]}&${answerUrl[2][0]}=${answerUrl[2][1]}&${answerUrl[3][0]}=${answerUrl[3][1]}`;
  console.log(url);
  
  const { data, isLoading, isError, error } = useQuery(
    'food',
    () => {
      return axios.get('http://localhost:5000/api/food');
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (e) => {
        console.log(e.message);
      },
    },
  );
  if (isLoading) {
    return <h1>로딩중</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
  console.log(data);
  return (
    <>
      <Title>이거머글랭?</Title>
      <Container>
        {data?.data.map((food) => (
          <div>
            <FoodImg src={food.img} />
            <div key={food.name}>{food.name}</div>
            <span key={food.comment}>{food.comment}</span>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Result;
