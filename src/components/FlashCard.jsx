import { useEffect, useState } from 'react';

export default function FlashCard({
  title = 'Título do Card',
  description = 'Descrição do Card, em muitas e várias palavras descritivas',
  showFlashCardTitle = true,
}) {
  const [showTitle, setShowTitle] = useState(showFlashCardTitle);

  useEffect(() => {
    setShowTitle(showFlashCardTitle);
  }, [showFlashCardTitle]);

  function handleCardClick() {
    //setShowTitle(!showTitle);
    setShowTitle(currentShowTitle => !currentShowTitle);
  }

  const fontSizeClassName = showTitle ? 'text-xl' : 'text-sm';
  return (
    <div
      className={`shadow-lg font-semibold p-4 w-80 h-48 m-2 cursor-pointer
    flex-row items-center justify-center font-mono ${fontSizeClassName}`}
      onClick={handleCardClick}
    >
      {showTitle ? title : description}
    </div>
  );
}
