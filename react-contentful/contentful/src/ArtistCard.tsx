import styled from 'styled-components';

interface Author {
  name: string;
  description: string;
  avatar: {
    file: {
      url: string;
    };
  };
}

interface AuthorCardProps {
  artist: Author;
}

const AuthorCard = ({ artist }: AuthorCardProps) => {
  return (
    <Wrapper background={artist.avatar.file.url}>
      <TextContainer>
        <Title>{artist.name}</Title>
        <Subtitle>{artist.description}</Subtitle>
      </TextContainer>
    </Wrapper>
  );
};

export default AuthorCard;

const Wrapper = styled.div`
  display: grid;
  align-items: flex-end;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(52, 53, 99, 0.2),
    0px 1px 3px rgba(0, 0, 0, 0.05);
  background-size: auto 150%;
`;

const TextContainer = styled.div`
  cursor: pointer;
  display: grid;
  background: rgba(255, 255, 255, 0.3);
  padding: 20px;
  gap: 10px;
  width: 100%;

  :hover {
    height: fit-content;
    width: auto;

    p:last-child {
      visibility: visible;
      display: block;
    }
  }
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  margin: 0;
  font-weight: bold;
  color: #000000;
  margin: 0px;
`;

const Subtitle = styled.p`
  font-weight: normal;
  font-size: 12px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.7);
  margin: 0px;
  visibility: hidden;
  display: none;
`;
