'use server'

import { feedbacks } from '../lib/feedbackStore'

export async function addFeedback(formData) {
  const newFeedback = {
    id: Date.now(),
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  }

  feedbacks.push(newFeedback)
}
