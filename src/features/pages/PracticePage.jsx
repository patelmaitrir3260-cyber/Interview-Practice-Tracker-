import React, { useContext } from 'react'
import { Appcontext } from '../../context/AppContext'
import { useNavigate } from 'react-router'

const PracticePage = () => {
  const { queNumber, questions, updateQuestionStatus } = useContext(Appcontext)
  const findQuestion = questions.find((val) => val.id === queNumber)
  const navigate = useNavigate()

  const currentIndex = questions.findIndex((val) => val.id === queNumber) + 1
  const totalQuestions = questions.length || 1
  const progressPercent = Math.round((currentIndex / totalQuestions) * 100)
     
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-amber-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">
              Interview Practice
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Practice Question
            </h1>
          </div>

          <button
            type="button"
            onClick={() => navigate('/questions')}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
          >
            Back to Questions
          </button>
        </div>

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Question {currentIndex || 0} of {totalQuestions}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                {findQuestion?.category || 'General'}
              </span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                {findQuestion?.difficulty || 'Medium'}
              </span>
            </div>
          </div>

          <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-linear-to-r from-amber-400 via-yellow-400 to-orange-500 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="mb-8 rounded-2xl border border-amber-100 bg-amber-50 p-5">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Question
            </p>
            <h2 className="text-xl font-semibold leading-relaxed text-slate-800 sm:text-2xl">
              {findQuestion?.question}
            </h2>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="text-sm font-semibold text-slate-700">
                Your Answer
              </label>
              <span className="text-xs text-slate-400">Be detailed and clear</span>
            </div>

            <textarea
          
              rows="10"
              placeholder="Write your answer here..."
              className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-relaxed text-slate-700 placeholder:text-slate-400 outline-none transition duration-200 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
            />

            <p className="mt-3 text-xs text-slate-500">
              Explain your answer clearly, include key steps, and provide examples when helpful.
            </p>
          </div>

          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Save Draft
            </button>

            <button
              onClick={() => {
                if (findQuestion) {
                  updateQuestionStatus(findQuestion.id, 'Completed')
                }
                navigate('/questions')
              }}
              type="button"
              className="rounded-xl bg-linear-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition hover:brightness-105"
            >
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PracticePage