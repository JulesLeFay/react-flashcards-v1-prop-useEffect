import { useState } from 'react';
import Button from '../components/Button';
import FlashCard from '../components/FlashCard';
import FlashCards from '../components/FlashCards';
import Header from '../components/Header';
import Main from '../components/Main';
import RadioButton from '../components/RadioButton';
import { allFlashCards } from '../data/allFlashcards';
import { helperShuffleArray } from '../helpers/arrayHelpers';

export default function FlashCardsPage() {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [showTitle, setShowTitle] = useState(true);

  function handleButtonClick() {
    const shuffleCards = helperShuffleArray(allCards);

    setAllCards(shuffleCards);
  }

  function handleRadioShowTitleClick() {
    setShowTitle(true);
  }

  function handleRadioShowDescriptionClick() {
    setShowTitle(false);
  }

  return (
    <>
      <Header>react-flashcards-v1</Header>

      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClick}>Embaralhar Cards</Button>
        </div>

        <div className="flex flex-row items-center justify-center space-x-4 m-4">
          <RadioButton
            id="radiobuttonShowTitle"
            name="showInfo"
            buttonChecked={showTitle}
            onButtonClick={handleRadioShowTitleClick}
          >
            Mostrar Título
          </RadioButton>

          <RadioButton
            id="radiobuttonShowDescription"
            name="showInfo"
            buttonChecked={!showTitle}
            onButtonClick={handleRadioShowDescriptionClick}
          >
            Mostrar Descrição
          </RadioButton>
        </div>

        <FlashCards>
          {allCards.map(({ id, title, description }) => {
            return (
              <FlashCard
                key={id}
                title={title}
                description={description}
                showFlashCardTitle={showTitle}
              />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
}
