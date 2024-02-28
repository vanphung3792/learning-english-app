import { IoCloseCircle } from "react-icons/io5"
import WordCard from "../WordCard";
import { useEffect, useState } from "react";
import { useLesson } from "../../context/LessonContext";

type VocabProps = {
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

const Vocab = ({ lessonId } : VocabProps) => {

  const [lessonData, setLessonData] = useState<LessonData | null>(null)

  const { closeVocab } = useLesson()

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
        <button className="self-end" onClick={closeVocab}><IoCloseCircle className="w-6 h-6" /></button>
        <WordCard word="hello" pronunciation="hɛˈloʊ" meaning="xin chào" onChange={() => {}} />
    </div>
  )
}
export default Vocab