import React from 'react'
import AddedProjectForm from './projectForm'
import { requireUser } from '@/lib/hooks'
import { redirect } from 'next/navigation';
import { ROLE } from '@/lib/utils';

export default async function OwnerPages() {

  const session = await requireUser();
  if (!session || session?.user?.role !== ROLE) {
    redirect('/')
  }
  return (
    <AddedProjectForm />
  )
}

