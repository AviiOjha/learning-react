import React from "react";

function Card({username ="Default", btnText = "Visit Me"}) {

    return (
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://images.unsplash.com/photo-1732203191132-9c43d4922af5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Hi! This card is made by Avinash Ojha who is learning Frontend development using React.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {btnText}
          </button>
        </div>
      </div>
    )
}

export default Card