import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'

export default function Page() {
  return (
    <div className='max-w-3xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Feedback</h1>

      <FeedbackForm />

      <div className='mt-10'>
        <FeedbackList />
      </div>
    </div>
  )
}
