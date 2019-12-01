import React from 'react'

const CurrentExperienceIndexContext = React.createContext({hippi: 'hi'})

export const CurrentExperienceIndexProvider = CurrentExperienceIndexContext.Provider
export const CurrentExperienceIndexConsumer = CurrentExperienceIndexContext.Consumer
export default CurrentExperienceIndexContext