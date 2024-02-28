import { IoCloseCircle } from "react-icons/io5"
import { useLesson } from "../../context/LessonContext"

type PhraseProps = {
}

const Phrase = ({  } : PhraseProps) => {

  const { closePhrase } = useLesson()

  return (
    <div
        className="
            flex
            flex-col
            gap-4
            w-full
        "
    >
        <button className="self-end" onClick={closePhrase}><IoCloseCircle className="w-6 h-6" /></button>
        Phrase
    </div>
  )
}
export default Phrase