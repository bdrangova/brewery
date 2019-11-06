export interface Brewery {
  id: string,
  name: string,
  description: string,
  established: string,
  images?: {
    large: string,
  }
}

export interface Beer {
  name: string,
  description: string,
  style: {
    description: string,
  },
  labels?: {
    medium: string,
  },
  breweries: Brewery[],
}

export type ContentType = 'brewery' | 'beer';
