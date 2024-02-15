import { IoCloseCircle } from "react-icons/io5"
import WordCard from "../WordCard";
import { useEffect, useState } from "react";

type VocabProps = {
    onClose: () => void;
    lessonId: string;
}

type Noun = {
    word: string;
    pronunciation: string;
    meaning: string;
}

type Verb = {
    word: string;
    pronunciation: string;
    meaning: string;
}

type LessonData = {
    nouns: Noun[];
    verbs: Verb[];
}

const Vocab = ({ onClose, lessonId } : VocabProps) => {

  const [lessonData, setLessonData] = useState<LessonData | null>(null)

  useEffect(() => {
    import(`../../data/lessons/${lessonId}.json`)
      .then((data) => setLessonData(data))
      .catch((error) => console.error(error))
  }, [lessonId])

  const nouns = lessonData?.nouns
  const verbs = lessonData?.verbs

  return (
    <div
        className="
            flex
            flex-col
            gap-10
            w-full
        "
    >
        <button className="self-end" onClick={onClose}><IoCloseCircle className="w-6 h-6" /></button>
        <WordCard word="hello" pronunciation="hɛˈloʊ" meaning="xin chào" onChange={() => {}} />
    </div>
  )
}
export default Vocab