export type Horse = {
  id: string
  name: string
  age: number
  breed: string
  distanceKm: number
  /** true = when you like this horse, it's a match */
  likesYou: boolean
  bio: string
  interests: string[]
  /** relative to the site root, e.g. "kone/bara.svg" */
  photo: string
}
