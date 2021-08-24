import React from 'react';
import { css } from '@emotion/react';
import SkillItem from './SkillItem';

type Margin = {
  margin?: Partial<{
    top: number;
    bottom: number;
    left: number;
    right: number;
  }>;
};

type SkillList = {
  title: string;
  list: {
    name: string;
    iconPath: string;
  }[];
};

const SkillList: React.FC<Margin & SkillList> = ({ margin, title, list }) => {
  return (
    <>
      <h3 css={skillTitleStyle}>{title}</h3>
      <ul css={[ulStyles, marginStyle({ margin })]}>
        {list.map((skill) => {
          <SkillItem {...skill} />;
        })}
      </ul>
    </>
  );
};
const skillTitleStyle = css`
  margin-bottom: 32px;
`;

// 親からマージンの指定を受ける
// 何も指定がない場合は margin: 0;
const marginStyle = ({ margin }: Margin) => {
  const top = margin?.top ?? 0;
  const bottom = margin?.bottom ?? 0;
  const left = margin?.left ?? 0;
  const right = margin?.right ?? 0;

  return css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    margin-left: ${left}px;
    margin-right: ${right}px;
  `;
};

const ulStyles = css`
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;

const liStyles = css`
  width: 46%;
  padding: 4px;
  background-color: #fafafa;
  list-style: none;
  text-align: center;
  border-radius: 4px;
  box-shadow: 2px 2px 5px 4px #ddd;
  transition: 0.2s ease-in-out;

  div {
    padding: 0 16px 16px 16px;

    p {
      font-size: 1.125rem;
    }
    img {
      max-width: 4rem;
      margin: 16px;
    }
  }

  &:hover {
    box-shadow: 5px 5px 5px 4px #ccc;
    transform: translateY(-2%);
  }
`;

export default SkillList;
