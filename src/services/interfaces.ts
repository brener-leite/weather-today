export interface BingProps {
  images: BingImage[]
}

interface BingImage {
  url: string
}

export interface WeatherProps {
  main: {
    pressure: number
    temp: number
    humidity: number
  }
  weather: {
    description: string
    id: number
    icon: string
  }[]
  wind: {
    speed: number
  }
}
