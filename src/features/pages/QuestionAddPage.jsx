import React, { useContext } from 'react'
import { Appcontext } from '../../context/AppContext';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const QuestionAddPage = () => {
  const { addQuestion, questions } = useContext(Appcontext)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const formdata = (data) => {
    const dataID = { ...data, id: questions.length + 1 }
    addQuestion(dataID)
    navigate('/questions')
    reset()
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-amber-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
            Question Bank
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Add New Question
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Create a new question for your interview practice list.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:p-8">
          <form onSubmit={handleSubmit(formdata)} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Question
              </label>

              <textarea
                {...register('question', {
                  required: {
                    value: true,
                    message: 'Question is required',
                  },
                  minLength: {
                    value: 10,
                    message: 'Question must be at least 10 characters long',
                  },
                })}
                rows="5"
                placeholder="Enter your question..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
              />
              {errors.question && <p className="mt-2 text-sm text-red-500">{errors.question.message}</p>}
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Category
                </label>

                <select
                  {...register('category', {
                    required: {
                      value: true,
                      message: 'Please select a category',
                    },
                  })}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                >
                  <option value="">Select Category</option>
                  <option value="DSA">DSA</option>
                  <option value="Git">Git</option>
                  <option value="Technical">Technical</option>
                </select>
                {errors.category && <p className="mt-2 text-sm text-red-500">{errors.category.message}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Difficulty
                </label>

                <select
                  {...register('difficulty', {
                    required: {
                      value: true,
                      message: 'Please select a difficulty',
                    },
                  })}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                >
                  <option value="">Select Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                {errors.difficulty && <p className="mt-2 text-sm text-red-500">{errors.difficulty.message}</p>}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Status
              </label>

              <select
                {...register('status', {
                  required: {
                    value: true,
                    message: 'Status is required',
                  },
                })}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              {errors.status && <p className="mt-2 text-sm text-red-500">{errors.status.message}</p>}
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => navigate('/questions')}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-xl bg-linear-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition hover:brightness-105"
              >
                Add Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default QuestionAddPage