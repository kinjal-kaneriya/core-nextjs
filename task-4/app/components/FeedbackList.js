import { feedbacks } from '@/app/lib/feedbackStore'

export default function FeedbackList() {
  if (feedbacks.length === 0) {
    return (
      <div className='text-center mt-10'>
        <p className='text-gray-500 text-sm'>No feedback submitted yet.</p>
      </div>
    )
  }

  return (
    <div className='max-w-3xl mx-auto mt-12 space-y-6'>
      <div>
        <h2 className='text-2xl font-semibold text-gray-800'>User Feedback</h2>
        <p className='text-sm text-gray-500'>See what users are saying</p>
      </div>

      <div className='space-y-4'>
        {feedbacks.map((item) => (
          <div
            key={item.id}
            className='bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition'
          >
            <div className='flex items-start justify-between'>
              <div>
                <p className='font-semibold text-gray-800'>{item.name}</p>
                <p className='text-sm text-gray-500'>{item.email}</p>
              </div>

              <span className='text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full'>
                Feedback
              </span>
            </div>

            <p className='mt-4 text-gray-700 leading-relaxed'>{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
