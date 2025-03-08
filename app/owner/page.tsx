import React from 'react'
import AddedProjectForm from './projectForm'
import { requireUser } from '@/lib/hooks'
import { redirect } from 'next/navigation';


export default async function OwnerPages() {

  const ROLE = process.env.USER_ROLE || ""

  const session = await requireUser();
  if (!session || session?.user?.role !== ROLE) {
    redirect('/')
  }
  return (
    <AddedProjectForm />
  )
}

