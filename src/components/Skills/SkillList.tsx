import React from 'react';
import { css } from '@emotion/react';
import SkillItem from './SkillItem';
import { breakpoints } from 'src/styles/styles';

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
    colorCode?: string;
    backgroundColor?: string;
  }[];
};

const SkillList: React.FC<Margin & SkillList> = ({ margin, title, list }) => {
  return (
    <>
      <h3 css={skillTitleStyle}>{title}</h3>
      <ul css={[ulStyles, marginStyle({ margin })]}>
        {list.map((skill) => (
          <SkillItem {...skill} key={skill.name} />
        ))}
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
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: ${breakpoints.sm}px) {
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default SkillList;
