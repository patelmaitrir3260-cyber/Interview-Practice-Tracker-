import React, { useContext } from 'react'
import { Appcontext } from '../context/AppContext'
import { useNavigate } from 'react-router'

const Card = ({question}) => {
 const { setQueNumber, updateQuestionStatus,deleteQuestion } = useContext(Appcontext)
 const navigate=useNavigate()
  return (
    <div
          key={question.id}
          className='w-[220px] rounded-2xl border border-amber-200 bg-amber-50 p-3 shadow-sm transition-all hover:shadow-md'
        >
          <div className='flex items-center justify-between gap-2'>
            <span className='rounded-full bg-amber-200 px-2 py-1 text-[10px] font-medium text-amber-800'>
              {question.category}
            </span>
            <span className='rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-medium text-emerald-700'>
              {question.difficulty}
            </span>
          </div>

          <h2 className='mt-3 text-sm font-semibold text-slate-800'>
            {question.question}
          </h2>

          <div className='mt-4 flex items-center justify-between gap-2'>
            <span className='text-[10px] uppercase tracking-wide text-slate-500'>
              {question.status}
            </span>
            <div className='flex gap-2'>
              <button onClick={()=>{updateQuestionStatus(question.id, "In Progress");
setQueNumber(question.id);
navigate("/practice");}} className='rounded-lg bg-slate-900 px-2 py-1 text-[10px] font-medium text-white'>
                Practice
              </button>
              <button
                type='button'
               onClick={()=>deleteQuestion(question.id)}
                className='rounded-lg bg-red-600 px-2 py-1 text-[10px] font-medium text-white hover:bg-red-700'
              >
                Delete
              </button>
            </div>
          </div>
        </div>
  )
}

export default Card