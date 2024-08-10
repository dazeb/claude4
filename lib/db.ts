import { Artifact } from '../types'

let artifacts: Artifact[] = []

export function getArtifacts(): Artifact[] {
  return artifacts
}

export function addArtifact(artifact: Omit<Artifact, 'id'>): void {
  artifacts.push({ id: Date.now(), ...artifact })
}