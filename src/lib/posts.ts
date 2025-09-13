import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { readingTime } from 'reading-time'

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  readTime: string
  tags: string[]
  emoji: string
  featured?: boolean
}

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug,
        content,
        readTime: readingTime(content).text,
        ...data,
      } as Post
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      content,
      readTime: readingTime(content).text,
      ...data,
    } as Post
  } catch {
    return null
  }
}
