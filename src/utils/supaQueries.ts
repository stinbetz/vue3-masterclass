import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export const tasksWithProjectsQuery = supabase.from('tasks').select(`
  *,
  projects(
    id,
    name,
    slug
    )
`)

export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>

export const projectsQuery = supabase.from('projects').select()

export type Projects = QueryData<typeof projectsQuery>

export function projectQuery(slug: string) {
  return supabase
    .from('projects')
    .select(`*, tasks (id, name, status, due_date)`)
    .eq('slug', slug)
    .single()
}
export type Project = QueryData<ReturnType<typeof projectQuery>>

export const taskQuery = (id: string) => {
  const taskId = Number(id)
  return supabase.from('tasks').select(`*, projects (name)`).eq('id', taskId).single()
}
export type Task = QueryData<ReturnType<typeof taskQuery>>
