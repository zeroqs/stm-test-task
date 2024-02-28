import { ReactNode } from 'react'

export interface ProviderProps {
  children: ReactNode
}

export interface User {
  cell: string
  nat: string
  phone: string
  email: string
  gender: string

  dob: {
    age: number
    date: string
  }

  id: {
    name: string
    value: string
  }

  location: {
    city: string
    coordinates: {
      latitude: string
      longitude: string
    }
    country: string
    postcode: number
    state: string
    street: {
      name: string
      number: number
    }
    timezone: {
      description: string
      offset: string
    }
  }

  login: {
    md5: string
    password: string
    salt: string
    sha1: string
    sha256: string
    username: string
    uuid: string
  }

  name: {
    first: string
    last: string
    title: string
  }

  picture: {
    large: string
    medium: string
    thumbnail: string
  }

  registered: {
    age: number
    date: string
  }
}

export interface ResponseInfo {
  page: number
  results: number
  seed: string
  version: string
}

export interface ResponseUserGet {
  info: ResponseInfo
  results: User[]
}
