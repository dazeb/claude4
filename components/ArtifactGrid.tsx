import React from 'react'
import { Artifact } from '../types'

interface ArtifactGridProps {
  artifacts: Artifact[]
}

export default function ArtifactGrid({ artifacts }: ArtifactGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {artifacts.map((artifact) => (
        <div key={artifact.id} className="border p-4">
          <h2>{artifact.title}</h2>
          <p>{artifact.description}</p>
          <a href={artifact.link} target="_blank" rel="noopener noreferrer">View Artifact</a>
        </div>
      ))}
    </div>
  )
}