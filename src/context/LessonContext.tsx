import { parse } from "postcss";
import { createContext, useContext, useState } from "react";

type LessonContextType = {
    openVocab: () => void
    closeVocab: () => void
    openPhrase: () => void
    closePhrase: () => void
    openSentence: () => void
    closeSentence: () => void
    isLessonOpen: boolean
    isVocabOpen: boolean
    isPhraseOpen: boolean
    isSentenceOpen: boolean
}

const LessonContext = createContext({} as LessonContextType)

export function useLesson () {
    return useContext(LessonContext)
}

// ========================================

type LessonProviderProps = {
    children: React.ReactNode
}

function LessonProvider ({children}: LessonProviderProps) {

    const [isVocabOpen, setIsVocabOpen] = useState(false)
    const [isPhraseOpen, setIsPhraseOpen] = useState(false)
    const [isSentenceOpen, setIsSentenceOpen] = useState(false)

    const isLessonOpen = isVocabOpen || isPhraseOpen || isSentenceOpen

    const openVocab = () => {
        setIsVocabOpen(true)
        setIsPhraseOpen(false)
        setIsSentenceOpen(false)
    }

    const closeVocab = () => {
        setIsVocabOpen(false)
    }

    const openPhrase = () => {
        setIsPhraseOpen(true)
        setIsVocabOpen(false)
        setIsSentenceOpen(false)
    }

    const closePhrase = () => {
        setIsPhraseOpen(false)
    }

    const openSentence = () => {
        setIsSentenceOpen(true)
        setIsVocabOpen(false)
        setIsPhraseOpen(false)
    }

    const closeSentence = () => {
        setIsSentenceOpen(false)
    }

    return (
        <LessonContext.Provider
            value={{
                isVocabOpen,
                isPhraseOpen,
                isSentenceOpen,
                isLessonOpen,
                openVocab,
                closeVocab,
                openPhrase,
                closePhrase,
                openSentence,
                closeSentence
            }}
        >
            {children}
        </LessonContext.Provider>
    )
}

export default LessonProvider
