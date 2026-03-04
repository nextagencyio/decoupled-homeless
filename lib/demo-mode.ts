/**
 * Demo Mode Module
 *
 * This file contains ALL demo/mock mode functionality.
 * To remove demo mode from a real project:
 * 1. Delete this file (lib/demo-mode.ts)
 * 2. Delete the data/mock/ directory
 * 3. Delete app/components/DemoModeBanner.tsx
 * 4. Remove DemoModeBanner from app/layout.tsx
 * 5. Remove the demo mode check from app/api/graphql/route.ts
 */

import homepageData from '@/data/mock/homepage.json'
import sheltersData from '@/data/mock/shelters.json'
import programsData from '@/data/mock/programs.json'
import resourcesData from '@/data/mock/resources.json'
import impactStoriesData from '@/data/mock/stories.json'
import routesData from '@/data/mock/routes.json'

export function isDemoMode(): boolean {
  return process.env.NEXT_PUBLIC_DEMO_MODE !== 'false'
}

const mockDataMap: Record<string, any> = {
  'homepage.json': homepageData,
  'shelters.json': sheltersData,
  'programs.json': programsData,
  'resources.json': resourcesData,
  'stories.json': impactStoriesData,
  'routes.json': routesData,
}

function loadMockData(filename: string): any {
  return mockDataMap[filename] || null
}

export function handleMockQuery(body: string): any {
  try {
    const { query, variables } = JSON.parse(body)

    if (variables?.path) {
      const routePath = variables.path
      const routes = loadMockData('routes.json')
      if (routes && routes[routePath]) {
        return routes[routePath]
      }
    }

    if (query.includes('GetHomepageData') || query.includes('nodeHomepages')) {
      return loadMockData('homepage.json')
    }

    if (query.includes('GetShelters') || query.includes('nodeShelters')) {
      return loadMockData('shelters.json')
    }

    if (query.includes('GetPrograms') || query.includes('nodePrograms')) {
      return loadMockData('programs.json')
    }

    if (query.includes('GetResources') || query.includes('nodeResources')) {
      return loadMockData('resources.json')
    }

    if (query.includes('GetImpactStories') || query.includes('nodeImpactStories')) {
      return loadMockData('stories.json')
    }

    return { data: {} }
  } catch (error) {
    console.error('Mock query error:', error)
    return { data: {}, errors: [{ message: 'Mock data error' }] }
  }
}
