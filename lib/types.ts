// Shared types
export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
}

// Base node type
export interface DrupalNode {
  __typename: string
  id: string
  title: string
  path: string
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Shelter
export interface DrupalShelter extends DrupalNode {
  shelterType?: DrupalTerm[]
  capacity?: string
  address?: string
  phone?: string
  hours?: string
  eligibility?: {
    processed: string
  }
  amenities?: string[]
}

export interface SheltersData {
  nodeShelters: {
    nodes: DrupalShelter[]
  }
}

// Program
export interface DrupalProgram extends DrupalNode {
  programCategory?: DrupalTerm[]
  duration?: string
  schedule?: string
  location?: string
  contactName?: string
  contactEmail?: string
}

export interface ProgramsData {
  nodePrograms: {
    nodes: DrupalProgram[]
  }
}

// Resource
export interface DrupalResource extends DrupalNode {
  resourceType?: DrupalTerm[]
  provider?: string
  phone?: string
  websiteUrl?: string
  address?: string
  availability?: string
}

export interface ResourcesData {
  nodeResources: {
    nodes: DrupalResource[]
  }
}

// Impact Story
export interface DrupalImpactStory extends DrupalNode {
  personName?: string
  programParticipated?: string
  quote?: {
    processed: string
  }
  outcome?: string
}

export interface ImpactStoriesData {
  nodeImpactStories: {
    nodes: DrupalImpactStory[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
