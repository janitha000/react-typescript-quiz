import React from 'react'
import { AnswerObject } from '../App'
import { Wrapper, ButtonWrapper } from '../QuestionCard.stypes'
import { QuestionState } from '../API'

type Props = {
    question: string;
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    questionNumber: number,
    totalQuestions: number
}

const answerClass = (userAnswer: AnswerObject | undefined, answer: string): string => {
    const correct = userAnswer?.correctAnswer === answer
    //const userClicked={userAnswer?.answer === answer}
    const userClicked = true

    const styleClass = correct ? 'correct'
        : !correct && userClicked ? 'wrong'
            : 'normal'

    return styleClass
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => {
    return (
        <Wrapper>
            <p className="number">
                Question: {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }}></p>
            <div>
                {answers.map((answer) => (
                    <ButtonWrapper
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                    >
                        <button disabled={!!userAnswer} onClick={callback} value={answer} className={answerClass(userAnswer, answer)}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard