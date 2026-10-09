import React, { useContext } from 'react'
import { Appcontext } from '../../context/AppContext';
import { useNavigate } from 'react-router'

const DashboardPage = () => {
  const navigate = useNavigate()
  const { questions } = useContext(Appcontext)

  const DSAquestions = questions.filter((val) => val.category === 'DSA')
  const Gitquestions = questions.filter((val) => val.category === 'Git')
  const Technicalquestions = questions.filter((val) => val.category === 'Technical')
  const pendingQuestions = questions.filter((val) => val.status === 'Pending')
  const inProgressQuestions = questions.filter((val) => val.status === 'In Progress')
  const completedQuestions = questions.filter((val) => val.status === 'Completed')

  const totalQuestions = questions.length
  const overallProgress = totalQuestions
    ? Math.round((completedQuestions.length / totalQuestions) * 100)
    : 0

  const getProgressWidth = (count) => {
    if (!totalQuestions) return 0
    return Math.min((count / totalQuestions) * 100, 100)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-amber-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
                Overview
              </p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Dashboard
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Track and manage your interview practice progress.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate('/questions/add')}
                className="rounded-xl bg-linear-to-r from-amber-500 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition hover:brightness-105"
              >
                + Create Question
              </button>

              <button
                onClick={() => navigate('/questions')}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View Questions
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Total Questions</p>
                <h2 className="mt-3 text-4xl font-bold text-slate-900">{questions.length}</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl">📚</div>
            </div>
            <p className="mt-4 text-sm text-slate-500">All questions</p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">DSA</p>
                <h2 className="mt-3 text-4xl font-bold text-slate-900">{DSAquestions.length}</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-lg font-bold text-blue-600">DSA</div>
            </div>
            <p className="mt-4 text-sm text-slate-500">DSA Questions</p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-linear-to-br from-orange-50 to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Git</p>
                <h2 className="mt-3 text-4xl font-bold text-slate-900">{Gitquestions.length}</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl">⑂</div>
            </div>
            <p className="mt-4 text-sm text-slate-500">Git Questions</p>
          </div>

          <div className="rounded-3xl border border-purple-100 bg-linear-to-br from-purple-50 to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Technical</p>
                <h2 className="mt-3 text-4xl font-bold text-slate-900">{Technicalquestions.length}</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-2xl">💻</div>
            </div>
            <p className="mt-4 text-sm text-slate-500">Technical Questions</p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Practice Progress</h2>
              <p className="text-sm text-slate-500">Keep track of your question-solving progress</p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-2xl font-bold text-slate-900">{questions.length}</p>
              <p className="text-xs text-slate-500">Total Questions</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">Overall Progress</span>
              <span className="text-sm font-semibold text-slate-900">{overallProgress}%</span>
            </div>

            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-linear-to-r from-blue-500 to-indigo-500"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
                  <span className="text-sm font-medium text-slate-700">Pending</span>
                </div>
                <span className="text-sm font-bold text-slate-900">{pendingQuestions.length}</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-yellow-400"
                  style={{ width: `${getProgressWidth(pendingQuestions.length)}%` }}
                ></div>
              </div>

              <p className="mt-1 text-xs text-slate-400">{pendingQuestions.length} questions</p>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                  <span className="text-sm font-medium text-slate-700">In Progress</span>
                </div>
                <span className="text-sm font-bold text-slate-900">{inProgressQuestions.length}</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-blue-500"
                  style={{ width: `${getProgressWidth(inProgressQuestions.length)}%` }}
                ></div>
              </div>

              <p className="mt-1 text-xs text-slate-400">{inProgressQuestions.length} questions</p>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                  <span className="text-sm font-medium text-slate-700">Completed</span>
                </div>
                <span className="text-sm font-bold text-slate-900">{completedQuestions.length}</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{ width: `${getProgressWidth(completedQuestions.length)}%` }}
                ></div>
              </div>

              <p className="mt-1 text-xs text-slate-400">{completedQuestions.length} questions</p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Recent Questions</h2>
              <p className="mt-1 text-sm text-slate-500">Your recently added questions</p>
            </div>

            <button
              onClick={() => navigate('/questions')}
              className="text-sm font-semibold text-amber-600 transition hover:text-amber-700"
            >
              View All →
            </button>
          </div>

          <div className="space-y-3">
            {questions.slice(-3).map((val) => (
              <div
                key={val.id}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{val.question}</h3>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                      {val.category}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                      {val.status}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/practice')}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700"
                >
                  Practice
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage