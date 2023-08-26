import styled from 'styled-components';


export const SubscriptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  width: 500px;
  padding: 20px;
  background-color: #053BA3;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  box-shadow: 0 4px 8px rgba(5, 59, 163, 0.1);
`;

export const Name = styled.h2`
  font-size: 24px;
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: -10px 0;
`;

export const Description = styled.p`
  font-size: 14px;
  font-size: 15px;
`;

export const FeatureList = styled.ul`
margin-top: -10px;
  list-style: none;
  padding: 0;
`;

export const Feature = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  &:before {
    content: '•';
    margin-right: 5px;
  }
`;

export const DiscountBadge = styled.span`
  background-color: #9F4500;
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
  width: 75px;
  padding: 5px 8px;
  border-radius: 4px;
  margin-right: 5px;
`;

export const TrialInfo = styled.p`
  font-size: 12px;
  color: #F97316;
  margin-top: 10px;
`;

export const PopularBadge = styled.span`
  background-color: #19026E;
  color: #fff;
  font-size: 14px;
  padding: 5px 8px;
  width: 75px;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color:#5BCBC3;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 15px;
  width: 100%;
`;