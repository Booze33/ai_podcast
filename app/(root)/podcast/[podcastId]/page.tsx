import React from 'react'

const PodacstDetails = ({ params }: { params: {podcastId: string } }) => {
  return (
    <p className="text-white-1">
      PodcatsDetails for {params.podcastId}
    </p>
  )
}

export default PodacstDetails
