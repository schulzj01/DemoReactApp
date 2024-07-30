/** Our "Person" data type */
export type Person = {
  personId: string
  firstName: string
  lastName: string
  avatar: string
  emails: (string | null | undefined)[]
  phoneNumbers: {
    type: string
    phone: string
  }[]
  address: string
  zipCode: string
  city: string
  state: string
  country: string
  age: number
  approvalDate: string
  isActive: string
  latitude: number
  longitude: number
  jobTitle: string | undefined
  organization: string | undefined
};
