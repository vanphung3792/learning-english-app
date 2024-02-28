import { IoCloseCircle } from "react-icons/io5"
import { useLesson } from "../../context/LessonContext"

type SentenceProps = {
}

const Sentence = ({  } : SentenceProps) => {

  const { closeSentence } = useLesson()

  return (
    <div
        className="
            flex
            flex-col
            gap-4
            w-full
        "
    >
        <button className="self-end" onClick={closeSentence}><IoCloseCircle className="w-6 h-6" /></button>
        Sentence
    </div>
  )
}
export default Sentence