'use client'

import { addFeedback } from '../actions/feedbackActions'

export default function FeedbackForm() {
  return (
    <div className='max-w-md mx-auto mt-10'>
      <form
        action={addFeedback}
        className='space-y-5 bg-white p-6 rounded-xl shadow-lg border'
      >
        <div className='text-center'>
          <h2 className='text-2xl font-semibold text-gray-800'>
            Send us your Feedback
          </h2>
          <p className='text-sm text-gray-500 mt-1'>
            We’d love to hear your thoughts
          </p>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Name
          </label>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            required
            className='w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Email
          </label>
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            required
            className='w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Message
          </label>
          <textarea
            name='message'
            rows='4'
            placeholder='Write your feedback...'
            required
            className='w-full border border-gray-300 p-2.5 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Button */}
        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition'
        >
          Submit Feedback
        </button>
      </form>
    </div>
  )
}
