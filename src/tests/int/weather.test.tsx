import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from 'components/Card'
import axios from 'axios'
import config from 'services/config.json'

describe('Weather Input', () => {
  let response = ''

  const callback = (value: string) => {
    response = value
  }

  beforeEach(() => {
    render(<Card onSubmit={callback} />)
  })

  it('input should be in the DOM', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should correctly change input value', () => {
    const value = 'string'
    const input: HTMLInputElement = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: value } })
    expect(input.value).toBe(value)
  })

  it('should correctly send input value on submit event form', () => {
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()

    const value = 'some string'
    const input: HTMLInputElement = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: value } })

    fireEvent.submit(form)
    expect(response).toBe(value)
  })

  it('should get data successfully from weather api', async () => {
    const city = 'Rio de Janeiro'

    const response = await axios.get(
      `${config.endpoints.weather}/data/2.5/forecast?q=${city}&APPID=772920597e4ec8f00de8d376dfb3f094`
    )

    expect(response.data.list.length).toBeGreaterThan(0)
  })
})
