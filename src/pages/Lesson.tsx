import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Button from "../components/Button"
import Vocab from "../components/Vocab/Vocab"
import Phrase from "../components/Phrase/Phrase"
import Sentence from "../components/Sentence/Sentence"
import { useState } from "react"

const Lesson = () => {

    const params = useParams()
    const lessonId = params.lessonId

    const [isVocabOpen, setIsVocabOpen] = useState(false)
    const [isPhraseOpen, setIsPhraseOpen] = useState(false)
    const [isSentenceOpen, setIsSentenceOpen] = useState(false)
    
    const isLessonOpen = isVocabOpen || isPhraseOpen || isSentenceOpen
    
    if (!lessonId) return null

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
                onClick={() => {
                  setIsVocabOpen(true)
                  setIsPhraseOpen(false)
                  setIsSentenceOpen(false)
                }}
                customClassName="border-l-4 solid border-rose-500"
              />
              <Button
                label="Cụm từ"
                onClick={() => {
                  setIsPhraseOpen(true)
                  setIsVocabOpen(false)
                  setIsSentenceOpen(false)
                }}
                customClassName="border-l-4 solid border-rose-500"
              />
              <Button
                label="Câu"
                onClick={() => {
                  setIsSentenceOpen(true)
                  setIsVocabOpen(false)
                  setIsPhraseOpen(false)
                }}
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
                <Vocab lessonId={lessonId} onClose={() => setIsVocabOpen(false)} />
              )}

              {isPhraseOpen && (
                <Phrase onClose={() => setIsPhraseOpen(false)} />
              )}

              {isSentenceOpen && (
                <Sentence onClose={() => setIsSentenceOpen(false)} />
              )}
            </div>
          )}
        </div>
    </div>
  )
}
export default Lesson