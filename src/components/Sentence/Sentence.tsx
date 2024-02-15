import { IoCloseCircle } from "react-icons/io5"

type SentenceProps = {
    onClose: () => void;
}

const Sentence = ({ onClose } : SentenceProps) => {

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
        Sentence
    </div>
  )
}
export default Sentence