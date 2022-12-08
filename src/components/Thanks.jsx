import React from "react";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data, updateFiledHandler }) => {
  return (
    <div className="thanks-container">
      <h2>Falta Pouco ....</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para a sua próxima compra.
      </p>
      <p>Para concluir a sua avaliação clique no botão Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação: {data.name} </h3>
      <div className="review-data">
        <span>Satisfação com o produto: </span>
        {emojiData[data.review]}
      </div>
      <div className="review-data">
        <span>Comentário: </span>
        {data.comment}
      </div>
    </div>
  );
};

export default Thanks;
