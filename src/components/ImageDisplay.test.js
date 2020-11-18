import React from 'react'
import ReactDom from 'react-dom'
import ImageDisplay from './ImageDisplay'

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<ImageDisplay /> ,div)
})
