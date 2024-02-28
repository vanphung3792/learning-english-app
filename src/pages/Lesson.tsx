import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Button from "../components/Button"
import Vocab from "../components/Vocab/Vocab"
import Phrase from "../components/Phrase/Phrase"
import Sentence from "../components/Sentence/Sentence"
import { useLesson } from "../context/LessonContext"

const Lesson = () => {

    const params = useParams()
    const lessonId = params.lessonId

    if (!lessonId) {
        return <h1>404</h1>
    }

    const {
      isLessonOpen,
      isVocabOpen,
      isPhraseOpen,
      isSentenceOpen,
      openVocab,
      openPhrase,
      openSentence,
    } = useLesson()
    
  return (
    <div id="lesson"
        className="
            flex
            flex-col
            min-h-screen
        "
    >
        <Navbar />

        {/* Body */}
        <div
          className="
            flex
            flex-row
            justify-center
            gap-10
            px-20
            py-10
            h-[calc(100vh-4rem)]
          "
        >

          {/* Menu */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-24
              w-1/5
            "
          >
            <h2>Bài {lessonId}</h2>
            <div
              className="
                flex
                flex-col
                gap-4
                w-full
              "
            >
              <Button
                label="Từ vựng"
                onClick={openVocab}
                customClassName="border-l-4 solid border-rose-500"
              />
              <Button
                label="Cụm từ"
                onClick={openPhrase}
                customClassName="border-l-4 solid border-rose-500"
              />
              <Button
                label="Câu"
                onClick={openSentence}
                customClassName="border-l-4 solid border-rose-500"
              />
            </div>
          </div>

          


          {/* Content */}
          {isLessonOpen && (
            <div
              className="
                flex
                flex-row
                gap-10
                w-4/5
              "
            >
              {/* Divider */}
              <div className="divider"></div>

              {/* Detail */}
              {isVocabOpen && (
                <Vocab lessonId={lessonId}/>
              )}

              {isPhraseOpen && (
                <Phrase />
              )}

              {isSentenceOpen && (
                <Sentence />
              )}
            </div>
          )}
        </div>
    </div>
  )
}
export default Lesson