import { decodeEntity } from 'html-entities'

export default function EmojiButton({
    emoji,
    handleClick,
    selectedCardEntry,
    matchedCardEntry,
    index
}) {
    
    const btnContent = selectedCardEntry || matchedCardEntry ? decodeEntity(emoji.htmlCode[0]) : "?"
    
    const btnStyle =
        matchedCardEntry ? "btn--emoji__back--matched" :
        selectedCardEntry ? "btn--emoji__back--selected" :
        "btn--emoji__front"
        
    const btnAria =
        matchedCardEntry ? `${decodeEntity(emoji.name)}. Matched.` :
        selectedCardEntry ? `${decodeEntity(emoji.name)}. Not matched yet.` :
        "Card upside down."
 
    return (
        <button
            className={`btn btn--emoji ${btnStyle}`}
            onClick={selectedCardEntry ? null : handleClick}
            disabled={matchedCardEntry}
            aria-label={`Position ${index + 1}: ${btnAria}`}
            aria-live="polite"
        >
            {btnContent}
        </button>
    )
}