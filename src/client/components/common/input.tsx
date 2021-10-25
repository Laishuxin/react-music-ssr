import React from 'react'

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return <input {...props} />
}
