import { IoCloseCircle } from "react-icons/io5"

type PhraseProps = {
    onClose: () => void;
}

const Phrase = ({ onClose } : PhraseProps) => {

  return (
    <div
        className="
            flex
            flex-col
            gap-4
            w-full
        "
    >
        <button className="self-end" onClick={onClose}><IoCloseCircle className="w-6 h-6" /></button>
        Phrase
    </div>
  )
}
export default Phrase