import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_IMPACT_STORIES } from '@/lib/queries'
import { ImpactStoriesData } from '@/lib/types'
import Header from '../components/Header'
import ImpactStoryCard from '../components/ImpactStoryCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Impact Stories | Haven House Initiative',
  description: 'Read inspiring stories of transformation and hope from our community.',
}

async function getImpactStories() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<ImpactStoriesData>({
      query: GET_IMPACT_STORIES,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeImpactStories?.nodes || []
  } catch (error) {
    console.error('Error fetching impact stories:', error)
    return []
  }
}

export default async function ImpactStoriesPage() {
  const items = await getImpactStories()

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />
      <section className="bg-[#faf8f5] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 mb-4">Impact Stories</h1>
            <div className="w-24 h-0.5 bg-accent-600 mx-auto mb-6" />
            <p className="text-xl text-primary-500 max-w-3xl mx-auto leading-relaxed">Real stories of transformation, resilience, and hope from our community.</p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-serif font-semibold text-gray-600 mb-2">No Impact Stories Yet</h2>
              <p className="text-gray-500">Impact Stories will appear here once content is imported.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (<ImpactStoryCard key={item.id} item={item} />))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
