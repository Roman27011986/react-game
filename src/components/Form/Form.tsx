import { useState, useMemo, useEffect } from "react";
import RadioBtnGroup from "../RadioBtnGroup/RadioBtnGroup";
import styled from "styled-components";
import SubmitBtn from "../Buttons/SubmitBtn";
import ControlBtn from "../Buttons/ControlBtn";

import bgCake from "../../img/cake/cake-bg.jpg";
import boardCake from "../../img/cake/cake-board.png";
import cake1 from "../../img/cake/cake1.png";
import cake2 from "../../img/cake/cake2.png";
import cake3 from "../../img/cake/cake3.png";
import cake4 from "../../img/cake/cake4.png";

import bgBauble from "../../img/bauble/bauble-bg.jpg";
import boardBauble from "../../img/bauble/bauble-board.png";
import bauble1 from "../../img/bauble/bauble1.png";
import bauble2 from "../../img/bauble/bauble2.png";
import bauble3 from "../../img/bauble/bauble3.png";

import bgCoin from "../../img/coins/coin-bg.jpg";
import boardCoin from "../../img/coins/coin-board.png";
import coin1 from "../../img/coins/coin1.png";
import coin2 from "../../img/coins/coin2.png";
import coin3 from "../../img/coins/coin3.png";

import bgFlower from "../../img/flowers/flower-bg.jpg";
import boardFlower from "../../img/flowers/flower-board.png";
import flower1 from "../../img/flowers/flower1.png";
import flower2 from "../../img/flowers/flower2.png";
import flower3 from "../../img/flowers/flower3.png";
import flower4 from "../../img/flowers/flower4.png";
import flower5 from "../../img/flowers/flower5.png";

import useSound from 'use-sound';
import clickEffeckt from "../../sounds/click.mp3"

import { IOptions, IGameItem, FormProps } from "./Form.types";

const gameTheme = [{
  backGroundImg: bgCake,
  boardImg: boardCake,
  dndItemsImg: [cake1, cake2, cake1, cake3, cake4]
},{
  backGroundImg: bgBauble,
  boardImg: boardBauble,
  dndItemsImg: [bauble1, bauble2, bauble1, bauble3, bauble2]
},{
  backGroundImg: bgCoin,
  boardImg: boardCoin,
  dndItemsImg: [coin1, coin2, coin3, coin1, coin2]
}
];

const FormStyled = styled.form`
display: flex;
height: 100%;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 37px 59px 29px 59px;
border-radius: 20px;
background-color: white;
`;

const Ul = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
height: 50%;
`;

const ControlBtnWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
`;

const RadioBtnGroupStyles = styled(RadioBtnGroup)`
// &:not(:last-child) {
//     margin-bottom: 40px;
//   }
`;

const Li = styled.li`
// &:not(:last-child) {
//     margin-bottom: 54px;
//   }
`; 

const radioBtnItems = [2, 3, 4, 5];

const radioBtnValues = [9, 19, 50, 99, 999];


export default function Form({onGameStart}: FormProps) {
    const [itemChecked, setItemChecked] = useState<number>(2);
    const [valueChecked, setValueChecked] = useState<number>(9);
    const [sequence, setSequence] = useState<boolean>(true);
    const [theme, setTheme] = useState<any>(gameTheme[0]);

    useEffect(() => {
      const randomTheme = gameTheme[Math.floor(Math.random() * gameTheme.length)]
      setTheme(randomTheme)
    },[])

    const [play] = useSound(clickEffeckt);

    const getRandomValue = (valuesArr: any) => {
      return valuesArr.splice(Math.floor(Math.random() * valuesArr.length), 1)[0];
    };

    const dndItems = useMemo(() => {
      const dndItemsArr: any = [];
      const dragItems: any = [];

      for (let i = 1; i <= valueChecked; i += 1) {
       dndItemsArr.push(i);      
      }

      for (let i = 0; i < itemChecked; i += 1) {
        const randomValue = getRandomValue(dndItemsArr);
         const gameItem: IGameItem = {
           value: randomValue,
           img: theme.dndItemsImg[i]
         };

         dragItems.push(gameItem)
        }

        const dropItems = [...dragItems].sort((a: any, b: any) => a.value - b.value)
        return { dragItems, dropItems };

    },[theme, valueChecked, itemChecked]);

    const handleItemChange = (e: any) => {
        play();
        setItemChecked(Number(e.currentTarget.value))
    }

    const handleValueChange = (e: any) => {
        setValueChecked(Number(e.currentTarget.value))
    }

    const toggleSequence = () => {
        setSequence(prev => !prev)
    };

    const handleSubmit = (e: any) => {
      e.preventDefault();
      const gameOptions: IOptions = {
          dragItems: dndItems.dragItems,
          dropItems: dndItems.dropItems,
          theme: theme,
          sequence,
      }
      onGameStart(gameOptions);
  };

    return (
        <FormStyled onSubmit={handleSubmit}>
            <Ul>
                <Li>
                  <RadioBtnGroupStyles 
                    title="Кол-во предметов" 
                    radioBtnSum={radioBtnItems} 
                    checked={itemChecked}
                    onHandleChange={handleItemChange}
                   />
                </Li>
                <Li>
                  <RadioBtnGroupStyles 
                    title="Значения" 
                    radioBtnSum={radioBtnValues} 
                    checked={valueChecked}
                    onHandleChange={handleValueChange}
                  />
                </Li>
            </Ul>
            <ControlBtnWrapper>
            <ControlBtn btnType="button" onHandleClick={toggleSequence} isDisabled={sequence}>По возростанию</ControlBtn>
            <ControlBtn btnType="button" onHandleClick={toggleSequence} isDisabled={!sequence}>По убыванию</ControlBtn>
            </ControlBtnWrapper>
            <SubmitBtn btnType="submit">Играть</SubmitBtn>
        </FormStyled>
    )
};