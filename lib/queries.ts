import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Shelters
export const GET_SHELTERS = gql`
  query GetShelters($first: Int = 20) {
    nodeShelters(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeShelter {
          body {
            processed
            summary
          }
          shelterType {
            ... on TermInterface {
              id
              name
            }
          }
          capacity
          address
          phone
          hours
          eligibility {
            processed
          }
          amenities
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_SHELTER_BY_PATH = gql`
  query GetShelterByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeShelter {
            id
            title
            path
            body {
              processed
            }
            shelterType {
              ... on TermInterface {
                id
                name
              }
            }
            capacity
            address
            phone
            hours
            eligibility {
              processed
            }
            amenities
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Programs
export const GET_PROGRAMS = gql`
  query GetPrograms($first: Int = 20) {
    nodePrograms(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeProgram {
          body {
            processed
            summary
          }
          programCategory {
            ... on TermInterface {
              id
              name
            }
          }
          duration
          schedule
          location
          contactName
          contactEmail
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_PROGRAM_BY_PATH = gql`
  query GetProgramByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeProgram {
            id
            title
            path
            body {
              processed
            }
            programCategory {
              ... on TermInterface {
                id
                name
              }
            }
            duration
            schedule
            location
            contactName
            contactEmail
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Resources
export const GET_RESOURCES = gql`
  query GetResources($first: Int = 20) {
    nodeResources(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeResource {
          body {
            processed
            summary
          }
          resourceType {
            ... on TermInterface {
              id
              name
            }
          }
          provider
          phone
          websiteUrl
          address
          availability
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_RESOURCE_BY_PATH = gql`
  query GetResourceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeResource {
            id
            title
            path
            body {
              processed
            }
            resourceType {
              ... on TermInterface {
                id
                name
              }
            }
            provider
            phone
            websiteUrl
            address
            availability
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Impact Stories
export const GET_IMPACT_STORIES = gql`
  query GetImpactStories($first: Int = 20) {
    nodeImpactStories(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeImpactStory {
          body {
            processed
            summary
          }
          personName
          programParticipated
          quote {
            processed
          }
          outcome
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_IMPACT_STORY_BY_PATH = gql`
  query GetImpactStoryByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeImpactStory {
            id
            title
            path
            body {
              processed
            }
            personName
            programParticipated
            quote {
              processed
            }
            outcome
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeShelter {
            id
            title
            path
            body {
              processed
            }
            shelterType {
              ... on TermInterface {
                id
                name
              }
            }
            capacity
            address
            phone
            hours
            eligibility {
              processed
            }
            amenities
          }
          ... on NodeProgram {
            id
            title
            path
            body {
              processed
            }
            programCategory {
              ... on TermInterface {
                id
                name
              }
            }
            duration
            schedule
            location
            contactName
            contactEmail
          }
          ... on NodeResource {
            id
            title
            path
            body {
              processed
            }
            resourceType {
              ... on TermInterface {
                id
                name
              }
            }
            provider
            phone
            websiteUrl
            address
            availability
          }
          ... on NodeImpactStory {
            id
            title
            path
            body {
              processed
            }
            personName
            programParticipated
            quote {
              processed
            }
            outcome
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured shelters for homepage (limit to 3)
export const GET_FEATURED_SHELTERS = gql`
  query GetFeaturedShelters {
    nodeShelters(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeShelter {
          shelterType {
            ... on TermInterface {
              id
              name
            }
          }
          capacity
          address
          hours
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured programs for homepage
export const GET_FEATURED_PROGRAMS = gql`
  query GetFeaturedPrograms {
    nodePrograms(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeProgram {
          programCategory {
            ... on TermInterface {
              id
              name
            }
          }
          duration
          location
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured impact stories for homepage
export const GET_FEATURED_IMPACT_STORIES = gql`
  query GetFeaturedImpactStories {
    nodeImpactStories(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeImpactStory {
          personName
          programParticipated
          quote {
            processed
          }
          outcome
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`
