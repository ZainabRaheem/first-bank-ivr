import React from 'react'

export default function DropDownRadioItemFragment(props) {
  return (
    <li>
          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <input
              id="filter-radio-example-1"
              type="radio"
              value=""
              name="filter-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              HtmlFor="filter-radio-example-1"
              className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
            >
              {props.label}
            </label>
          </div>
        </li>
  )
}
