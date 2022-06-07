import { StyledCard } from "./styles/Card.styled";

function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt={title} />
      </div>
    </StyledCard>
  );
}

export default Card;
