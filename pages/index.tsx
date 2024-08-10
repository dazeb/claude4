import { GetServerSideProps } from 'next'
import ArtifactGrid from '../components/ArtifactGrid'
import { Artifact } from '../types'

interface HomeProps {
  artifacts: Artifact[]
}

export default function Home({ artifacts }: HomeProps) {
  return (
    <div>
      <h1>Claude Artifacts Showcase</h1>
      <ArtifactGrid artifacts={artifacts} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { getArtifacts } = require('../lib/db')
  const artifacts = await getArtifacts()
  return { props: { artifacts } }
}
