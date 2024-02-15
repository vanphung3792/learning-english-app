import Button from "./Button"

type WordCardProps = {
  word: string
  pronunciation?: string
  meaning?: string
  onChange: () => void
}

const WordCard = ({ word, pronunciation, meaning, onChange }: WordCardProps) => {

  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-between
        p-4
        h-[300px]
      "
    >
      <h5>{word}</h5>
      <h6>{pronunciation}</h6>
      <Button label="Từ khác" onClick={onChange} />
    </div>
  )
}
export default WordCard