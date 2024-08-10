// components/SubmitForm.tsx
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/router'
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import React from 'react'

export default function SubmitForm() {
  const [link, setLink] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ link, title, description }),
    })
    if (res.ok) {
      router.push('/')
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold text-card-foreground">Submit Your Artifact</h2>
          <p className="text-muted-foreground">Enter the details of your artifact below to share it with us.</p>
          <Input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter artifact link..."
            required
          />
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter artifact title..."
            required
          />
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter artifact description..."
            required
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}
