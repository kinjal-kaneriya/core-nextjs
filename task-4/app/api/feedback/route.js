import { feedbacks } from '@/app/lib/feedbackStore'

export async function GET() {
  return Response.json({
    success: true,
    data: feedbacks,
  })
}
