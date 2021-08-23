import React from 'react';
import { css } from '@emotion/react';

type skillProps = {
  skillList: {
    name: string;
    iconPath: string;
  }[];
};

const NewSkill: React.FC<skillProps> = ({ skillList }) => {
  return (
    <ul css={ulStyles}>
      {skillList.map((skill) => {
        const src = `/skillIcons/${skill.iconPath}.svg`;

        return (
          <li css={liStyles} key={skill.name}>
            <div>
              <p>{skill.name}</p>
              <img src={src} alt="" />
            </div>
          </li>
        );
      })}
    </ul>
  );
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

export default NewSkill;
