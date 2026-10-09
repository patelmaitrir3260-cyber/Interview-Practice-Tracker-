import React, { useContext, useState } from 'react'
import { Appcontext } from '../../context/AppContext'
import Card from '../../components/Card'
import { useNavigate } from 'react-router'

const QuestionPage = () => {
  const { questions } = useContext(Appcontext)
  const navigate = useNavigate()
  const [seachItem, setSeachItem] = useState('All categories')
  const [searching, setSearching] = useState('')
  const [difficult, setDifficult] = useState('All')

  const filteredQuestions = questions.filter((val) => {
    const matchesSearch = val.question
      .toLowerCase()
      .includes(searching.toLowerCase())

    const matchesCategory =
      seachItem === 'All categories' || val.category === seachItem

    const matchesDifficulty = difficult === 'All' || val.difficulty === difficult

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-amber-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
                Practice Library
              </p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">
                Question Bank
              </h1>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Dashboard
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/questions/add')}
                  className="rounded-xl bg-linear-to-r from-amber-500 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition hover:brightness-105"
                >
                  Create Question
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative min-w-55">
                <input
                  onChange={(e) => setSearching(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                  type="text"
                  placeholder="Search questions"
                />
              </div>

              <select
                onChange={(elem) => setSeachItem(elem.target.value)}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
              >
                <option value="All categories">All categories</option>
                <option value="DSA">DSA</option>
                <option value="Git">Git</option>
                <option value="Technical">Technical</option>
              </select>

              <select
                onChange={(elem) => setDifficult(elem.target.value)}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
              >
                <option value="All">All difficulties</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {questions.length === 0 ? (
            <div className="w-full rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">No Questions Available</h2>
              <p className="mt-2 text-slate-500">Add your first question to start practicing.</p>
            </div>
          ) : filteredQuestions.length > 0 ? (
            filteredQuestions.map((val) => <Card key={val.id} question={val} />)
          ) : (
            <div className="w-full rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">No Questions Found</h2>
              <p className="mt-2 text-slate-500">Try a different keyword or filter combination.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuestionPage